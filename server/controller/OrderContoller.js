import queryDb from '../helpers/db';


class OrderController {
  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */

  static create(request, response) {
    const {
      customer_id, total_prize, item
    } = request.body;

    const query = {
      text:
        // eslint-disable-next-line max-len
        `INSERT INTO orders(customer_id, total_prize, item) 
        VALUES ($1, $2, $3) RETURNING *`,
      values: [
        customer_id, total_prize, item
      ]
    };
    queryDb.dbQuery(response, query, 'order created successfully', 'order not found');
  }

  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static getAll(request, response) {
    const query = 'SELECT * FROM orders';
    queryDb.dbQuery(response, query, 'orders retrieved successfully', 'order not found');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static getById(request, response) {
    const { id } = request.params;

    const query = {
      text: 'SELECT * FROM orders WHERE order_id = $1',
      values: [id]
    };
    queryDb.dbQuery(response, query, 'orders retrieved successfully', 'order not found');
  }
}

export default OrderController;
