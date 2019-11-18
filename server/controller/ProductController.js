import conn from "../helpers/conn";

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
      prod_name,
      long_desc,
      short_desc,
      discount,
      coupons,
      sku_id,
      price,
      image_url,
      available_color,
      quantity,
      is_active,
      last_updated_by
    } = request.body;

    const query = {
      text:
        "INSERT INTO products(prod_name, long_desc, short_desc, discount, coupons, sku_id, price, image_url, available_color, quantity,is_active, last_updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      values: [
        prod_name,
        long_desc,
        short_desc,
        discount,
        coupons,
        sku_id,
        price,
        image_url,
        available_color,
        quantity,
        is_active,
        last_updated_by
      ]
    };
    ProductController.addProductQuery(response, query);
  }

  /**
   *  Run user addUser query
   *  @param {Object} request
   *  @param {Object} response
   *  @param {String} query
   *  @return {Object} json
   *
   */
  static addProductQuery(response, query) {
    client
      .query(query)
      .then(() =>
        response.status(201).json({
          status: 201,
          success: "Product created successfully"
        })
      )
      .catch((error) =>
        response.status(500).json({ status: 500, error: `Server error ${error}` })
      );
  }
}

export default ProductController;
