import checkNewOrder from '../validations/checkNewOrder';
import validation from '../middleware/validator';
import OrderController from '../controller/OrderContoller';

const routes = (app) => {
  app.post('/api/v1/orders', checkNewOrder, validation.validatorError, OrderController.create);
};

export default routes;
