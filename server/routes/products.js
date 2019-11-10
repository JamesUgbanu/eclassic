import { check } from 'express-validator';
import validation from '../middleware/validator';
import ProductController from '../controller/ProductController';

const routes = (app) => {
  app.post('/api/v1/product', [
    check('productName').not().isEmpty().withMessage('Product Name is required'),
    check('shortDescription').not().isEmpty().withMessage('Description is required')
  ], validation.validatorError, ProductController.createProduct);
};

export default routes;
