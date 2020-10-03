import { ApiVersion } from '@shopify/koa-shopify-graphql-proxy';

export const webhooksOctober19 = [
  { name: 'CARTS_CREATE', route: '/webhooks/carts/create', apiVersion: ApiVersion.October19 },
  { name: 'CARTS_UPDATE', route: '/webhooks/carts/update', apiVersion: ApiVersion.October19 },
  { name: 'CHECKOUTS_CREATE', route: '/webhooks/checkouts/create', apiVersion: ApiVersion.October19 },
  { name: 'CHECKOUTS_DELETE', route: '/webhooks/checkouts/delete', apiVersion: ApiVersion.October19 },
  { name: 'CHECKOUTS_UPDATE', route: '/webhooks/checkouts/update', apiVersion: ApiVersion.October19 },
  { name: 'COLLECTIONS_CREATE', route: '/webhooks/collections/create', apiVersion: ApiVersion.October19 },
  { name: 'COLLECTIONS_DELETE', route: '/webhooks/collections/delete', apiVersion: ApiVersion.October19 },
  { name: 'COLLECTIONS_UPDATE', route: '/webhooks/collections/update', apiVersion: ApiVersion.October19 },
  {
    name: 'CUSTOMER_GROUPS_CREATE',
    route: '/webhooks/customers-groups/create',
    apiVersion: ApiVersion.October19,
  },
  {
    name: 'CUSTOMER_GROUPS_DELETE',
    route: '/webhooks/customers-groups/delete',
    apiVersion: ApiVersion.October19,
  },
  {
    name: 'CUSTOMER_GROUPS_UPDATE',
    route: '/webhooks/customers-groups/update',
    apiVersion: ApiVersion.October19,
  },
  { name: 'CUSTOMERS_CREATE', route: '/webhooks/customers/create', apiVersion: ApiVersion.October19 },
  { name: 'CUSTOMERS_DELETE', route: '/webhooks/customers/delete', apiVersion: ApiVersion.October19 },
  { name: 'CUSTOMERS_DISABLE', route: '/webhooks/customers/disable', apiVersion: ApiVersion.October19 },
  { name: 'CUSTOMERS_ENABLE', route: '/webhooks/customers/enable', apiVersion: ApiVersion.October19 },
  { name: 'CUSTOMERS_UPDATE', route: '/webhooks/customers/update', apiVersion: ApiVersion.October19 },
  {
    name: 'INVENTORY_LEVELS_CONNECT',
    route: '/webhooks/inventory-levels/connect',
    apiVersion: ApiVersion.October19,
  },
  {
    name: 'INVENTORY_LEVELS_DISCONNECT',
    route: '/webhooks/inventory-levels/disconnect',
    apiVersion: ApiVersion.October19,
  },
  {
    name: 'INVENTORY_LEVELS_UPDATE',
    route: '/webhooks/inventory-levels/update',
    apiVersion: ApiVersion.October19,
  },
  { name: 'ORDERS_CANCELLED', route: '/webhooks/orders/cancelled', apiVersion: ApiVersion.October19 },
  { name: 'ORDERS_CREATE', route: '/webhooks/orders/create', apiVersion: ApiVersion.October19 },
  { name: 'ORDERS_DELETE', route: '/webhooks/orders/delete', apiVersion: ApiVersion.October19 },
  { name: 'ORDERS_EDITED', route: '/webhooks/orders/edited', apiVersion: ApiVersion.October19 },
  { name: 'ORDERS_FULFILLED', route: '/webhooks/orders/fulfilled', apiVersion: ApiVersion.October19 },
  { name: 'ORDERS_PAID', route: '/webhooks/orders/paid', apiVersion: ApiVersion.October19 },
  {
    name: 'ORDERS_PARTIALLY_FULFILLED',
    route: '/webhooks/orders/partially-fulfilled',
    apiVersion: ApiVersion.October19,
  },
  { name: 'ORDERS_UPDATED', route: '/webhooks/orders/updated', apiVersion: ApiVersion.October19 },
  {
    name: 'ORDER_TRANSACTIONS_CREATE',
    route: '/webhooks/orders-transactions/create',
    apiVersion: ApiVersion.October19,
  },
  { name: 'PRODUCT_LISTINGS_ADD', route: '/webhooks/product-listings/add', apiVersion: ApiVersion.October19 },
  {
    name: 'PRODUCT_LISTINGS_REMOVE',
    route: '/webhooks/product-listings/remove',
    apiVersion: ApiVersion.October19,
  },
  {
    name: 'PRODUCT_LISTINGS_UPDATE',
    route: '/webhooks/product-listings/update',
    apiVersion: ApiVersion.October19,
  },
  { name: 'PRODUCTS_CREATE', route: '/webhooks/products/create', apiVersion: ApiVersion.October19 },
  { name: 'PRODUCTS_DELETE', route: '/webhooks/products/delete', apiVersion: ApiVersion.October19 },
  { name: 'PRODUCTS_UPDATE', route: '/webhooks/products/update', apiVersion: ApiVersion.October19 },
];
