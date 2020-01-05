import removeAuth0fromUserId from '../helpers/helpers';
import { queryController, client } from '../helpers/db';


class ProductController {
  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static create(request, response) {
    const {
      prod_name, long_desc, short_desc, discount,
      coupons, sku_id, price, image_url,
      available_color, quantity, is_active
    } = request.body;
    const lastUpdatedBy = removeAuth0fromUserId(request.user.sub);

    const query = {
      text:
        // eslint-disable-next-line max-len
        'INSERT INTO products(prod_name, long_desc, short_desc, discount, coupons, sku_id, price, image_url, available_color, quantity,is_active, last_updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      values: [
        prod_name, long_desc, short_desc, discount,
        coupons, sku_id, price, image_url, available_color,
        quantity, is_active, lastUpdatedBy
      ]
    };
    queryController.dbQuery(response, query, 'Product created successfully', 'product not found');
  }

  /**
  * @param {Object} request
  * @param {Object} response
  * @return {Object} json
  */
  static updateProduct(request, response) {
    // client.connect();
    const id = parseInt(request.params.id, 10);
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const lastUpdatedBy = removeAuth0fromUserId(request.user.sub);
    let product;
    const findquery = {
      text: 'SELECT * FROM products WHERE prod_id = $1',
      values: [id]
    };

    client.query(findquery, (err, result) => {
      if (err) {
        return response.status(500).json({ status: 500, error: `Server error ${err}` });
      }
      if (result.rowCount === 0) {
        return queryController.notFoundError(response, 'product not found');
      }
      const { rows } = result;
      product = {
        prod_name: rows[0].prod_name,
        long_desc: rows[0].long_desc,
        short_desc: rows[0].short_desc,
        discount: rows[0].discount,
        coupons: rows[0].coupons,
        sku_id: rows[0].sku_id,
        price: rows[0].price,
        image_url: rows[0].image_url,
        available_color: rows[0].available_color,
        quantity: rows[0].quantity,
        is_active: rows[0].is_active,
        last_updated_by: rows[0].last_updated_by,
      };
      const values = [
        request.body.prod_name || product.prod_name, request.body.long_desc || product.long_desc,
        request.body.short_desc || product.short_desc, request.body.discount || product.discount,
        request.body.coupons || product.coupons, request.body.sku_id || product.sku_id,
        request.body.price || product.price, request.body.image_url || product.image_url,
        request.body.available_color || product.available_color, request.body.quantity || product.quantity,
        request.body.is_active || product.is_active, date,
        lastUpdatedBy || product.last_updated_by, id
      ];
      const updatequery = {
        text: `UPDATE products SET prod_name = $1, long_desc = $2, short_desc = $3, discount = $4, coupons = $5, 
        sku_id = $6, price = $7, image_url = $8, available_color = $9, quantity = $10, 
        is_active = $11, last_update = $12, last_updated_by = $13 WHERE prod_id = $14 RETURNING *`,
        values
      };
      client.query(updatequery).then((res) => {
        queryController.getSuccess(response, 200, res, 'product updated successfully');
      });
      // queryController.dbQuery(response, updatequery, 'product updated successfully', 'product not found');
    });
  }

  /**
  * @param {Object} request
  * @param {Object} response
  * @return {Object} json
  */
  static getAll(request, response) {
    const query = 'SELECT * FROM products';
    queryController.dbQuery(response, query, 'Products retrieved successfully', 'product not found');
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
    queryController.dbQuery(response, query, 'product retrieved successfully', 'product not found');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static removeById(request, response) {
    const id = parseInt(request.params.id, 10);

    const query = {
      text: 'DELETE FROM products WHERE prod_id = $1',
      values: [id]
    };
    queryController.dbQuery(response, query, 'product removed successfully', 'product not found');
  }
}

export default ProductController;
