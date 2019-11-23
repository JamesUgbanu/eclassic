import checkNewProduct from "./../validations/checkNewProduct";
import validation from "../middleware/validator";
import ProductController from "../controller/ProductController";

const routes = app => {
  app.post(
    "/api/v1/products",
    checkNewProduct,
    validation.validatorError,
    ProductController.createProduct
  );
};

export default routes;
