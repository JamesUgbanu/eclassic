import queryDb from '../helpers/db';

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
      available_color, quantity, is_active,
      last_updated_by
    } = request.body;

    const query = {
      text:
        // eslint-disable-next-line max-len
        'INSERT INTO products(prod_name, long_desc, short_desc, discount, coupons, sku_id, price, image_url, available_color, quantity,is_active, last_updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      values: [
        prod_name, long_desc, short_desc, discount,
        coupons, sku_id, price, image_url, available_color,
        quantity, is_active, last_updated_by
      ]
    };
    queryDb.dbQuery(response, query, 'Product created successfully', 'product not found');
  }

  /**
  * @param {Object} request
  * @param {Object} response
  * @return {Object} json
  */
  // static async updateProduct(request, response) {
  //   const id = parseInt(request.params.id, 10);
  //   const today = new Date();
  //   const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  //   const findquery = {
  //     text: 'SELECT * FROM products WHERE prod_id = $1',
  //     values: [id]
  //   };
  //   try {
  //     const {
  //       rows
  //     } = await client.query(findquery);
  //     if (!rows[0]) {
  //       return ProductController.notFoundError(response);
  //     }
  //     const values = [
  //       request.body.prod_name, request.body.long_desc, request.body.short_desc, request.body.discount,
  //       request.body.coupons, request.body.sku_id, request.body.price, request.body.image_url,
  //       request.body.available_color, request.body.quantity, request.body.is_active, date,
  //       request.body.last_updated_by, id
  //     ];
  //     const updatequery = {
  //       text: `UPDATE products SET prod_name = $1, long_desc = $2, short_desc = $3, discount = $4, coupons = $5, 
  //       sku_id = $6, price = $7, image_url = $8, available_color = $9, quantity = $10, 
  //       is_active = $11, last_update = $12, last_updated_by = $13 WHERE prod_id = $14 RETURNING *`,
  //       values
  //     };

  //     const result = await client.query(updatequery);
  //     return ProductController.updateTaskSuccess(response, result, 200, 'product updated successfully');
  //   } catch (error) { return response.status(500).json({ status: 500, error: `Server error ${error}` }); }
  // }

  /**
  * @param {Object} request
  * @param {Object} response
  * @return {Object} json
  */
  static getAll(request, response) {
    const query = 'SELECT * FROM products';
    queryDb.dbQuery(response, query, 'Products retrieved successfully', 'product not found');
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
    queryDb.dbQuery(response, query, 'product retrieved successfully', 'product not found');
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
    queryDb.dbQuery(response, query, 'product removed successfully', 'product not found');
  }
}

export default ProductController;
