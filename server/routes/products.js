import checkNewProduct from '../validations/checkNewProduct';
import validation from '../middleware/validator';
import ProductController from '../controller/ProductController';

const routes = (app) => {
  app.post('/api/v1/products', checkNewProduct, validation.validatorError, ProductController.create);
  app.get('/api/v1/products', ProductController.getAll);
  app.get('/api/v1/products/:id', ProductController.getById);
};

export default routes;
