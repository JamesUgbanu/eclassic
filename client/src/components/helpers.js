export const generateSerial = () => {
  const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const serialLength = 10;
  let randomSerial = '';
  let randomNumber;

  for (let i = 0; i < serialLength; i += 1) {
    randomNumber = Math.floor(Math.random() * chars.length);
    randomSerial += chars.substring(randomNumber, randomNumber + 1);
  }
  return randomSerial;
};

// Generate list of products for given page number
export const generateProductsByPage = (products, pageNo) => {
  // I assumed showing 10 products per page
  const perPage = 10;
  if (products.length) {
    // Filter 10 products by page number
    return products.filter((product, i) => i >= perPage * (pageNo - 1) && i < perPage * pageNo);
  }
  return [];
};

// Find current product based on ID passed in URL
export const findCurrentProduct = (products, id = -1) => {
  // Find product for given id
  return products.find(product => parseInt(product.prod_id, 10) === parseInt(id, 10));
};

// Check if current state has cart item
export const checkForItemState = (products, id) => {
  // Find product for given id
  const foundProduct = products.find(product => parseInt(product.prod_id, 10) === parseInt(id, 10));
  return !!foundProduct;
};
