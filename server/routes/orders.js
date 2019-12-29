import checkNewOrder from '../validations/checkNewOrder';
import validation from '../middleware/validator';
import OrderController from '../controller/OrderContoller';
import auth from '../config/auth';
import role from '../middleware/user';

const routes = (app) => {
  app.post('/api/v1/orders', auth, checkNewOrder, validation.validatorError, OrderController.create);
  app.get('/api/v1/orders', auth, role.checkRole('admin'), OrderController.getAll);
  app.get('/api/v1/orders/:id', auth, OrderController.getById);
  app.get('/api/v1/user/orders', auth, OrderController.getUserOrder);
};

export default routes;
