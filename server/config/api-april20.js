import { ApiVersion } from '@shopify/koa-shopify-graphql-proxy';

export const webhooksApril20 = [
  { name: 'CARTS_CREATE', route: '/webhooks/carts/create', apiVersion: ApiVersion.April20 },
  { name: 'CARTS_UPDATE', route: '/webhooks/carts/update', apiVersion: ApiVersion.April20 },
  { name: 'CHECKOUTS_CREATE', route: '/webhooks/checkouts/create', apiVersion: ApiVersion.April20 },
  { name: 'CHECKOUTS_DELETE', route: '/webhooks/checkouts/delete', apiVersion: ApiVersion.April20 },
  { name: 'CHECKOUTS_UPDATE', route: '/webhooks/checkouts/update', apiVersion: ApiVersion.April20 },
  { name: 'COLLECTIONS_CREATE', route: '/webhooks/collections/create', apiVersion: ApiVersion.April20 },
  { name: 'COLLECTIONS_DELETE', route: '/webhooks/collections/delete', apiVersion: ApiVersion.April20 },
  { name: 'COLLECTIONS_UPDATE', route: '/webhooks/collections/update', apiVersion: ApiVersion.April20 },
  {
    name: 'CUSTOMER_GROUPS_CREATE',
    route: '/webhooks/customers-groups/create',
    apiVersion: ApiVersion.April20,
  },
  {
    name: 'CUSTOMER_GROUPS_DELETE',
    route: '/webhooks/customers-groups/delete',
    apiVersion: ApiVersion.April20,
  },
  {
    name: 'CUSTOMER_GROUPS_UPDATE',
    route: '/webhooks/customers-groups/update',
    apiVersion: ApiVersion.April20,
  },
  { name: 'CUSTOMERS_CREATE', route: '/webhooks/customers/create', apiVersion: ApiVersion.April20 },
  { name: 'CUSTOMERS_DELETE', route: '/webhooks/customers/delete', apiVersion: ApiVersion.April20 },
  { name: 'CUSTOMERS_DISABLE', route: '/webhooks/customers/disable', apiVersion: ApiVersion.April20 },
  { name: 'CUSTOMERS_ENABLE', route: '/webhooks/customers/enable', apiVersion: ApiVersion.April20 },
  { name: 'CUSTOMERS_UPDATE', route: '/webhooks/customers/update', apiVersion: ApiVersion.April20 },
  {
    name: 'INVENTORY_LEVELS_CONNECT',
    route: '/webhooks/inventory-levels/connect',
    apiVersion: ApiVersion.April20,
  },
  {
    name: 'INVENTORY_LEVELS_DISCONNECT',
    route: '/webhooks/inventory-levels/disconnect',
    apiVersion: ApiVersion.April20,
  },
  {
    name: 'INVENTORY_LEVELS_UPDATE',
    route: '/webhooks/inventory-levels/update',
    apiVersion: ApiVersion.April20,
  },
  { name: 'ORDERS_CANCELLED', route: '/webhooks/orders/cancelled', apiVersion: ApiVersion.April20 },
  { name: 'ORDERS_CREATE', route: '/webhooks/orders/create', apiVersion: ApiVersion.April20 },
  { name: 'ORDERS_DELETE', route: '/webhooks/orders/delete', apiVersion: ApiVersion.April20 },
  { name: 'ORDERS_EDITED', route: '/webhooks/orders/edited', apiVersion: ApiVersion.April20 },
  { name: 'ORDERS_FULFILLED', route: '/webhooks/orders/fulfilled', apiVersion: ApiVersion.April20 },
  { name: 'ORDERS_PAID', route: '/webhooks/orders/paid', apiVersion: ApiVersion.April20 },
  {
    name: 'ORDERS_PARTIALLY_FULFILLED',
    route: '/webhooks/orders/partially-fulfilled',
    apiVersion: ApiVersion.April20,
  },
  { name: 'ORDERS_UPDATED', route: '/webhooks/orders/updated', apiVersion: ApiVersion.April20 },
  {
    name: 'ORDER_TRANSACTIONS_CREATE',
    route: '/webhooks/orders-transactions/create',
    apiVersion: ApiVersion.April20,
  },
  { name: 'PRODUCTS_CREATE', route: '/webhooks/products/create', apiVersion: ApiVersion.April20 },
  { name: 'PRODUCTS_DELETE', route: '/webhooks/products/delete', apiVersion: ApiVersion.April20 },
  { name: 'PRODUCTS_UPDATE', route: '/webhooks/products/update', apiVersion: ApiVersion.April20 },
];
