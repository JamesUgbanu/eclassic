import UserController from '../controller/UserController';

const routes = (app) => {
  app.post('/api/v1/login', UserController.login);
};

export default routes;
