import { queryController } from '../helpers/db';
import removeAuth0fromUserId from '../helpers/helpers';

class OrderController {
  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */

  static create(request, response) {
    const {
      total_prize, item
    } = request.body;

    const userId = removeAuth0fromUserId(request.user.sub);

    const query = {
      text:
        // eslint-disable-next-line max-len
        `INSERT INTO orders(customer_id, total_prize, item) 
        VALUES ($1, $2, $3) RETURNING *`,
      values: [
        userId, total_prize, item
      ]
    };
    queryController.dbQuery(response, query, 'order created successfully', 'order not found');
  }

  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static getAll(request, response) {
    const query = 'SELECT * FROM orders';
    queryController.dbQuery(response, query, 'orders retrieved successfully', 'order not found');
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
    queryController.dbQuery(response, query, 'orders retrieved successfully', 'order not found');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static getUserOrder(request, response) {
    const userId = removeAuth0fromUserId(request.user.sub);

    const query = {
      text: 'SELECT * FROM orders WHERE customer_id = $1',
      values: [userId]
    };
    queryController.dbQuery(response, query, 'orders retrieved successfully', 'order not found');
  }
}

export default OrderController;
