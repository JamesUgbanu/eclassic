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
  static createProduct(request, response) {
    const {
      productName,
      shortDescription,
    } = request.body;

    const query = {
      text: 'INSERT INTO products(name, short_desc) VALUES ($1, $2) RETURNING *',
      values: [productName, shortDescription],
    };
    ProductController.addProductQuery(response, query);
  }

  /**
       *  Run user addUser query
       *  @param {Object} request
       *  @param {Object} response
       * @param {String} query
       *  @return {Object} json
       *
       */
  static addProductQuery(response, query) {
    client.query(query)
      .then(() => response.status(201).json({
        status: 201,
        success: 'Product created successfully'
      }))
      .catch(() => response.status(500).json({ status: 500, error: 'Server error' }));
  }
}

export default ProductController;
