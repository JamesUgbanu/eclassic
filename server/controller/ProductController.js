import dbQuery from '../helpers/dbQuery';

class ProductController {
  /**
   *  Create a new Product
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static create(request, response) {
    const {
      prod_name, long_desc, short_desc, discount, coupons, sku_id, price, image_url, available_color, quantity, is_active,
      last_updated_by
    } = request.body;

    const query = {
      text:
        // eslint-disable-next-line max-len
        'INSERT INTO products(prod_name, long_desc, short_desc, discount, coupons, sku_id, price, image_url, available_color, quantity,is_active, last_updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      values: [
        prod_name, long_desc, short_desc, discount, coupons, sku_id, price, image_url, available_color, quantity, is_active, last_updated_by
      ]
    };
    dbQuery(response, query, 201, 'Product created successfully');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static getAll(request, response) {
    const query = 'SELECT * FROM products';
    dbQuery(response, query, 200, 'Products retrieved successfully');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static getById(request, response) {
    const id = parseInt(request.params.id, 10);
    const query = {
      text: 'SELECT * FROM products WHERE prod_id = $1',
      values: [id]
    };
    dbQuery(response, query, 200, 'Products retrieved successfully');
  }
}

export default ProductController;
