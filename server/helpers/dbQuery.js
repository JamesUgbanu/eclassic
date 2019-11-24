import conn from './conn';

const client = conn();
client.connect();

/**
 * @param {object} response
 * @param {String} query
 * @param {integer} status
 * @param {string} msg
 * @return {object} json
 */
const dbQuery = (response, query, status, msg) => {
  client
    .query(query)
    .then(result => response.status(status).json({
      status,
      success: msg,
      products: result.rows
    }))
    .catch(error => response
      .status(500)
      .json({ status: 500, error: `Server error ${error}` }));
};

export default dbQuery;
