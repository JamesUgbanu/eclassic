import conn from './conn';

const client = conn();
client.connect();

class queryController {
  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */

  static notFoundError(response, errorMsg) {
    return response.status(404).json({
      status: 404,
      error: errorMsg,
    });
  }

  static getandUpdateSuccess(response, status, dbresult, successMsg) {
    return response.status(status).json({
        status,
      success: successMsg,
      orders: dbresult.rows
    });
  }


  static dbQuery(response, query, message, notFound) {
    client
      .query(query)
      .then((result) => {
        if (result.rowCount === 0) {
          return queryController.notFoundError(response, notFound);
        }
        if (message) {
          return queryController.getandUpdateSuccess(response, 201, result, message);
        }
        queryController.getandUpdateSuccess(response, 200, result, message);
      })
      .catch(error => response
        .status(500)
        .json({ status: 500, error: `Server error ${error}` }));
  }
}

export default queryController;
