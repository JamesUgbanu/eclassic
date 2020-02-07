const createExt = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; ';
const productDestroy = 'DROP TABLE IF EXISTS products CASCADE; ';
const orderDestroy = 'DROP TABLE IF EXISTS orders CASCADE; ';
const userDestroy = 'DROP TABLE IF EXISTS users CASCADE; ';

const destroyQuery = `${productDestroy}${orderDestroy}${userDestroy}${createExt}`;

export default destroyQuery;
