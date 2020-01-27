const createExt = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; ';
const productDestroy = 'DROP TABLE IF EXISTS products CASCADE; ';
const orderDestroy = 'DROP TABLE IF EXISTS orders CASCADE; ';
const shippingTableDestroy = 'DROP TABLE IF EXISTS shipping CASCADE; ';

const destroyQuery = `${productDestroy}${orderDestroy}${shippingTableDestroy}${createExt}`;

export default destroyQuery;
