// import dbQuery from '../helpers/dbQuery';
import conn from '../helpers/conn';

const client = conn();
client.connect();

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
    ProductController.dbQuery(response, query, 'Product created successfully', 201);
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static getAll(request, response) {
    const query = 'SELECT * FROM products';
    ProductController.dbQuery(response, query, 'Products retrieved successfully', 200);
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
    ProductController.dbQuery(response, query, 'Products retrieved successfully', 200);
  }

  /**
  * @param {object} response
  * @param {string} query
  * @param {string} message
  * @param {integer} status
  * @return {object} json
  */
  static dbQuery(response, query, message, status) {
    client
      .query(query)
      .then((result) => {
        if (result.rowCount === 0) {
          return response.status(404).json({
            status: 404,
            error: 'Not Found',
          });
        }
        return response.status(status).json({
          status,
          success: message,
          products: result.rows
        });
      })
      .catch(error => response
        .status(500)
        .json({ status: 500, error: `Server error ${error}` }));
  }
}

export default ProductController;
