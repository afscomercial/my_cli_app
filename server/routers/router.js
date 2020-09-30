import Router from 'koa-router';
import { verifyRequest } from '@shopify/koa-shopify-auth';
import * as initControllers from '../controllers/index';

export const routers = (handle, webhook) => {
  return new Router()
    .post('/webhooks/carts/create', webhook, initControllers.webhook)
    .post('/webhooks/carts/update', webhook, initControllers.webhook)
    .post('/webhooks/checkouts/create', webhook, initControllers.webhook)
    .post('/webhooks/checkouts/delete', webhook, initControllers.webhook)
    .post('/webhooks/checkouts/update', webhook, initControllers.webhook)
    .post('/webhooks/collections-listings/create', webhook, initControllers.webhook)
    .post('/webhooks/collections-listings/delete', webhook, initControllers.webhook)
    .post('/webhooks/collections-listings/update', webhook, initControllers.webhook)
    .post('/webhooks/collections/create', webhook, initControllers.webhook)
    .post('/webhooks/collections/delete', webhook, initControllers.webhook)
    .post('/webhooks/collections/update', webhook, initControllers.webhook)
    .post('/webhooks/customers-groups/create', webhook, initControllers.webhook)
    .post('/webhooks/customers-groups/delete', webhook, initControllers.webhook)
    .post('/webhooks/customers-groups/update', webhook, initControllers.webhook)
    .post('/webhooks/customers/create', webhook, initControllers.webhook)
    .post('/webhooks/customers/delete', webhook, initControllers.webhook)
    .post('/webhooks/customers/disable', webhook, initControllers.webhook)
    .post('/webhooks/customers/enable', webhook, initControllers.webhook)
    .post('/webhooks/customers/update', webhook, initControllers.webhook)
    .post('/webhooks/inventory-levels/connect', webhook, initControllers.webhook)
    .post('/webhooks/inventory-levels/disconnect', webhook, initControllers.webhook)
    .post('/webhooks/inventory-levels/update', webhook, initControllers.webhook)
    .post('/webhooks/orders/cancelled', webhook, initControllers.webhook)
    .post('/webhooks/orders/create', webhook, initControllers.webhook)
    .post('/webhooks/orders/delete', webhook, initControllers.webhook)
    .post('/webhooks/orders/edited', webhook, initControllers.webhook)
    .post('/webhooks/orders/fulfilled', webhook, initControllers.webhook)
    .post('/webhooks/orders/paid', webhook, initControllers.webhook)
    .post('/webhooks/orders/partially-fulfilled', webhook, initControllers.webhook)
    .post('/webhooks/orders/updated', webhook, initControllers.webhook)
    .post('/webhooks/orders-transactions/create', webhook, initControllers.webhook)
    .post('/webhooks/product-listings/add', webhook, initControllers.webhook)
    .post('/webhooks/product-listings/remove', webhook, initControllers.webhook)
    .post('/webhooks/product-listings/update', webhook, initControllers.webhook)
    .post('/webhooks/products/create', webhook, initControllers.webhook)
    .post('/webhooks/products/delete', webhook, initControllers.webhook)
    .post('/webhooks/products/update', webhook, initControllers.webhook)
    .get('/status', initControllers.status)
    .get('*', verifyRequest(), async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    });
};
