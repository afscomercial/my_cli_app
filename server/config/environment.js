export const environment = {
  env: process.env.NODE_ENV,
  port: parseInt(process.env.POST, 10) || 8081,
  apiVersion: process.env.API_VERSION,
  shopifyApiSecret: process.env.SHOPIFY_API_SECRET,
  shopifyApiKey: process.env.SHOPIFY_API_KEY,
  scopes: process.env.SCOPES
}
