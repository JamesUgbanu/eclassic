import conn from '../helpers/conn';

const client = conn();
client.connect();

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
    OrderController.dbQuery(response, query, 201, 'order created successfully');
  }

  static notFoundError(response) {
    return response.status(404).json({
      status: 404,
      error: 'order not found',
    });
  }

  static getTaskSuccess(response, dbresult) {
    return response.status(200).json({
      status: 200,
      success: 'order retrieved successfully',
      products: dbresult.rows
    });
  }

  static updateTaskSuccess(response, dbresult, status, message) {
    return response.status(status).json({
      status,
      success: message,
      products: dbresult.rows
    });
  }

  static dbQuery(response, query, status, message) {
    client
      .query(query)
      .then((result) => {
        if (result.rowCount === 0) {
          return OrderController.notFoundError(response);
        }
        if (message) {
          return OrderController.updateTaskSuccess(response, result, status, message);
        }
        OrderController.getTaskSuccess(response, result);
      })
      .catch(error => response
        .status(500)
        .json({ status: 500, error: `Server error ${error}` }));
  }
}

export default OrderController;
