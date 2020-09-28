import '@babel/polyfill';
import createShopifyAuth from '@shopify/koa-shopify-auth';
import { environment, webhooksOctober19, webhooksApril20 } from './config';
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
const dev = environment.env !== 'production';
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

const app = next({
  dev,
});
const handle = app.getRequestHandler();
const { port, shopifyApiSecret, shopifyApiKey, scopes } = environment;
app.prepare().then(() => {
  const server = new Koa();
  const webhook = receiveWebhook({
    secret: shopifyApiSecret,
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
  server.keys = [shopifyApiSecret];
  server.use(
    createShopifyAuth({
      apiKey: shopifyApiKey,
      secret: shopifyApiSecret,
      scopes: [scopes],

      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        let defaultWebhooks = []

        switch (environment.apiVersion) {
          case ApiVersion.October19:
            defaultWebhooks = webhooksOctober19;
            break;

          case ApiVersion.April20:
            defaultWebhooks = webhooksApril20;
            break;
        }

        for (const webhook of defaultWebhooks) {
          await handlers.registerWebhooks(
            shop,
            accessToken,
            webhook.name,
            webhook.route,
            webhook.apiVersion,
          );
        }

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
      version: environment.apiVersion,
    }),
  );

  const router = routers.routers(handle, webhook);
  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(port, () => {
    log.info(`> Ready on http://localhost:${port}`);
  });
});
