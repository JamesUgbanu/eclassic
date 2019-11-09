const createExt = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; ';
const productDestroy = 'DROP TABLE IF EXISTS product CASCADE; ';
const orderTable = 'DROP TABLE IF EXISTS order CASCADE; ';

const destroyQuery = `${productDestroy}${orderTable}${createExt}`;

export default destroyQuery;
