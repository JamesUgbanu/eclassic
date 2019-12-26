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

  static getSuccess(response, dbresult, successMsg) {
    return response.status(200).json({
      status: 200,
      success: successMsg,
      orders: dbresult.rows
    });
  }

  static updateSuccess(response, dbresult, message) {
    return response.status(201).json({
      status: 201,
      success: message,
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
          return queryController.updateSuccess(response, result, message);
        }
        queryController.getSuccess(response, result, message);
      })
      .catch(error => response
        .status(500)
        .json({ status: 500, error: `Server error ${error}` }));
  }
}

export default queryController;
