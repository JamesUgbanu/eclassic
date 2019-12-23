import checkNewOrder from '../validations/checkNewOrder';
import validation from '../middleware/validator';
import OrderController from '../controller/OrderContoller';

const routes = (app) => {
  app.post('/api/v1/orders', checkNewOrder, validation.validatorError, OrderController.create);
  app.get('/api/v1/orders', OrderController.getAll);
  app.get('/api/v1/orders/:id', OrderController.getById);
};

export default routes;
