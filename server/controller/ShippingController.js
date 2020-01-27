import { queryController, client } from '../helpers/db';

class ShippingController {
  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static create(request, response) {
    const {
      customer_id, address, city, state, phone
    } = request.body;
    const query = {
      text:
        // eslint-disable-next-line max-len
        `INSERT INTO shipping(customer_id, address, city, state, phone) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [
        customer_id, address, city, state, phone
      ]
    };
    queryController.dbQuery(response, query, 'shipping address created', 'address not found');
  }

  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static getAll(request, response) {
    const query = 'SELECT * FROM shipping';
    queryController.dbQuery(response, query, 'shipping addresses retrieved', 'address not found');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  static getById(request, response) {
    const id = parseInt(request.params.id, 10);

    const query = {
      text: 'SELECT * FROM shipping WHERE shipping_id = $1',
      values: [id]
    };
    queryController.dbQuery(response, query, 'shipping address retrieved', 'address not found');
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @return {Object} json
   */
  // static getUserAddress(request, response) {
  //   const userId = removeAuth0fromUserId(request.user.sub);

  //   const query = {
  //     text: 'SELECT * FROM shipping WHERE customer_id = $1',
  //     values: [userId]
  //   };
  //   queryController.dbQuery(response, query, 'user shipping address retrieved', 'address not found');
  // }

  /**
  * @param {Object} request
  * @param {Object} response
  * @return {Object} json
  */
  static removeById(request, response) {
    const id = parseInt(request.params.id, 10);

    const query = {
      text: 'DELETE FROM shipping WHERE shipping_id = $1',
      values: [id]
    };
    queryController.dbQuery(response, query, 'address removed successfully', 'address not found');
  }

  /**
* @param {Object} request
* @param {Object} response
* @return {Object} json
*/
  static updateAddress(request, response) {
    const id = parseInt(request.params.id, 10);
    const findquery = {
      text: 'SELECT * FROM shipping WHERE shipping_id = $1',
      values: [id]
    };
    client.query(findquery, (err, result) => {
      if (err) {
        return queryController.serverError(response, err);
      }
      if (result.rowCount === 0) {
        return queryController.notFoundError(response, 'address not found');
      }
      const { rows } = result;
      const updatequery = {
        text: `UPDATE shipping SET address = $1, city = $2, state = $3,
         phone = $4 WHERE shipping_id = $5 RETURNING *`,
        values: [
          request.body.address || rows[0].address, request.body.city || rows[0].city,
          request.body.state || rows[0].state, request.body.phone || rows[0].phone, id
        ]
      };
      client.query(updatequery).then((res) => {
        queryController.getSuccess(response, 200, res, 'address updated successfully');
      });
    });
  }
}

export default ShippingController;
