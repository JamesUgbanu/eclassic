import checkNewAddress from '../validations/checkNewAddress';
import validation from '../middleware/validator';
import userAddressController from '../controller/UserAddressController';


const routes = (app) => {
  app.post('/api/v1/users', checkNewAddress, validation.validatorError, userAddressController.create);
  app.put('/api/v1/users/:id', userAddressController.updateAddress);
  app.get('/api/v1/users', userAddressController.getAll);
  app.get('/api/v1/user/:id', userAddressController.getById);
  app.delete('/api/v1/user/:id', userAddressController.removeById);
};

export default routes;
