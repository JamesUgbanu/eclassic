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

const createShippingTable = `
  CREATE TABLE IF NOT EXISTS shipping(
    shipping_id SERIAL PRIMARY KEY NOT NULL,
    customer_id VARCHAR(50),
    address VARCHAR(200) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    phone VARCHAR(12) NOT NULL
  );
`;
const createQuery = `${createProductTable}${createOrderTable}${createShippingTable}`;
export default createQuery;
