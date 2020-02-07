const createProductTable = `
  CREATE TABLE IF NOT EXISTS products(
    prod_id SERIAL PRIMARY KEY NOT NULL,
    prod_name VARCHAR(40) NOT NULL,
    long_desc TEXT,
    short_desc TEXT NOT NULL,
    discount INTEGER,
    coupons JSONB,
    sku_id VARCHAR,
    price NUMERIC,
    image_url JSONB,
    available_color JSONB,
    quantity INTEGER,
    is_active BOOLEAN DEFAULT false,
    datecreated TIMESTAMP WITH TIME ZONE DEFAULT now(),
    last_update TIMESTAMP WITH TIME ZONE,
    last_updated_by VARCHAR(50)
  );
`;

const createOrderTable = `
  CREATE TABLE IF NOT EXISTS orders(
    order_id UUID NOT NULL DEFAULT uuid_generate_v4(),
    customer_id VARCHAR(50),
    total_prize NUMERIC NOT NULL,
    item JSONB,
    status VARCHAR(10) DEFAULT 'open',
    created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_on TIMESTAMP WITH TIME ZONE
  );
`;
const createUserTable = `
  CREATE TABLE IF NOT EXISTS users(
    user_id VARCHAR(50) PRIMARY KEY NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    state VARCHAR(50),
    phone VARCHAR(12)
  );
`;
const createQuery = `${createProductTable}${createOrderTable}${createUserTable}`;
export default createQuery;
