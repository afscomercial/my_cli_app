import Router from 'koa-router';
import { verifyRequest } from '@shopify/koa-shopify-auth';
import { receiveWebhook } from '@shopify/koa-shopify-webhooks';
import { initControllers } from '../controllers';

const { SHOPIFY_API_SECRET } = process.env;

const webhook = receiveWebhook({
  secret: SHOPIFY_API_SECRET,
});

export const middleware = (handle) => {
  return new Router()
    .post('/webhooks/products/create', webhook, (ctx) => {
      console.log('received webhook: ', ctx.state.webhook);
    })
    .get('/test', initControllers.test)
    .get('*', verifyRequest(), async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    });
};
