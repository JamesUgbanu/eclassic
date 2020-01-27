import checkNewShipping from '../validations/checkNewShipping';
import validation from '../middleware/validator';
import ShippingController from '../controller/ShippingController';


const routes = (app) => {
  app.post('/api/v1/shippings', checkNewShipping, validation.validatorError, ShippingController.create);
  app.put('/api/v1/shippings/:id', checkNewShipping, validation.validatorError, ShippingController.updateAddress);
  app.get('/api/v1/shippings', ShippingController.getAll);
  app.get('/api/v1/shipping/:id', ShippingController.getById);
  app.delete('/api/v1/shipping/:id', ShippingController.removeById);
};

export default routes;
