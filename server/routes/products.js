import checkNewProduct from '../validations/checkNewProduct';
import validation from '../middleware/validator';
import ProductController from '../controller/ProductController';
import auth from '../config/auth';
import role from '../middleware/user';

const routes = (app) => {
  app.post('/api/v1/products', auth, role.checkRole('admin'), checkNewProduct, validation.validatorError, ProductController.create);
  app.get('/api/v1/products', ProductController.getAll);
  app.get('/api/v1/products/:id', ProductController.getById);
  app.delete('/api/v1/products/:id', auth, role.checkRole('admin'), ProductController.removeById);
};

export default routes;
