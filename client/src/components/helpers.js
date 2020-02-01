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

// Generate list of items, products, order for given page number
export const generateByPage = (products, pageNo, perPage) => {
  // I assumed showing 10 products per page
  if (products.length) {
    // Filter 10 products by page number
    return products.filter((product, i) => i >= perPage * (pageNo - 1) && i < perPage * pageNo);
  }
  return [];
};

// Find current Item based on ID passed in URL
export const findCurrentItem = (items, id = -1, isOrder = false) => {
  // Find product for given id
  if (!isOrder) return items.find(item => parseInt(item.prod_id, 10) === parseInt(id, 10));
  return items.find(item => item.order_id === id);
};
// Check if current state has cart item
export const checkForItemState = (products, id) => {
  // Find product for given id
  const foundProduct = products.find(product => parseInt(product.prod_id, 10) === parseInt(id, 10));
  return !!foundProduct;
};

// Return item total from the cart
export const getCartTotal = (cartItems) => {
  let total = 0;
  // Find product for given id
  cartItems.forEach((item) => {
    total += parseFloat(item.price) * parseInt(item.cartQuantity);
  });
  return total;
};

// Return item total from the cart
export const getQuantity = (cartItems) => {
  let quantity = 0;
  // Find product for given id
  cartItems.forEach((item) => {
    quantity += parseInt(item.cartQuantity);
  });
  return quantity;
};
