import '@babel/polyfill';
import createShopifyAuth from '@shopify/koa-shopify-auth';
import graphQLProxy, { ApiVersion } from '@shopify/koa-shopify-graphql-proxy';
import { receiveWebhook } from '@shopify/koa-shopify-webhooks';
import dotenv from 'dotenv';
import 'isomorphic-fetch';
import Koa from 'koa';
import pino from 'pino';
import pinoLogger from 'koa-pino-logger';
import koaLogger from 'koa-logger';
import session from 'koa-session';
import next from 'next';
import * as handlers from './handlers/index';
import * as routers from './routers/index';
dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const log = pino({
  timestamp: () => {
    return pino.stdTimeFunctions.isoTime();
  },
  prettyPrint: dev,
});
const logger = dev
  ? pinoLogger({
      instance: log,
    })
  : koaLogger();
const port = parseInt(process.env.PORT, 10) || 8081;

const app = next({
  dev,
});
const handle = app.getRequestHandler();
const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SCOPES } = process.env;
app.prepare().then(() => {
  const server = new Koa();
  const webhook = receiveWebhook({
    secret: SHOPIFY_API_SECRET,
  });

  server.use(handlers.errorHandler);
  server.use(logger);

  server.use(
    session(
      {
        sameSite: 'none',
        secure: true,
      },
      server,
    ),
  );
  server.keys = [SHOPIFY_API_SECRET];
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET,
      scopes: [SCOPES],

      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        await handlers.registerWebhooks(
          shop,
          accessToken,
          'PRODUCTS_CREATE',
          '/webhooks/products/create',
          ApiVersion.October19,
        );
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none',
        });
        ctx.redirect('/');
      },
    }),
  );
  server.use(
    graphQLProxy({
      version: ApiVersion.October19,
    }),
  );

  const router = routers.routers(handle, webhook);
  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(port, () => {
    log.info(`> Ready on http://localhost:${port}`);
  });
});
