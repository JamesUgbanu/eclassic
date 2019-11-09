const createProductTable = `
  CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    long_desc TEXT,
    short_desc TEXT NOT NULL,
    discount INTEGER,
    coupons JSONB,
    sku_id VARCHAR,
    price NUMERIC,
    image_url TEXT,
    available_color JSONB,
    weight INTEGER,
    is_active BOOLEAN DEFAULT false,
    created_on TIMESTAMP WITH TIME ZONE,
    last_update TIMESTAMP WITH TIME ZONE,
    last_updated_by INTEGER
  );
`;

const createOrderTable = `
  CREATE TABLE IF NOT EXISTS order(
    id UUID NOT NULL DEFAULT uuid_generate_v4(),
    customer INTEGER,
    total NUMERIC NOT NULL,
    date TIMESTAMP WITH TIME ZONE,
    item JSONB,
    status VARCHAR(10) DEFAULT 'open',
    created_on TIMESTAMP WITH TIME ZONE,
    updated_on TIMESTAMP WITH TIME ZONE
  );
`;

const createQuery = `${createProductTable}${createOrderTable}`;
export default createQuery;
