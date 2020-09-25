import Router from 'koa-router';
import { verifyRequest } from '@shopify/koa-shopify-auth';
import { receiveWebhook } from '@shopify/koa-shopify-webhooks';
import { initControllers } from '../controllers';

const { SHOPIFY_API_SECRET } = process.env;

const webhook = receiveWebhook({
  secret: SHOPIFY_API_SECRET,
});

export const routers = (handle) => {
  const router = new Router();

  router.post('/webhooks/products/create', webhook, (ctx) => {
    console.log('received webhook: ', ctx.state.webhook);
  });
  router.get('/test', initControllers.test);
  router.get('*', verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  return router;
};
