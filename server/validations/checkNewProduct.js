import { check } from 'express-validator';

const checkNewProduct = [
  check('prod_name', 'Product Name is required')
    .not()
    .isEmpty()
    .isLength({ max: 40 })
    .withMessage('Product name should be less than 40 char')
    .custom(value => value.match(/^[A-Za-z\s]+$/))
    .withMessage('Product name should be alphanumeric')
    .trim()
    .escape(),
  check('long_desc').optional(),
  check('short_desc', 'Product Description is required')
    .not()
    .isEmpty(),
  check('discount')
    .optional()
    .trim(),
  check('coupons').optional(),
  check('sku_id')
    .optional()
    .isString(),
  check('price', 'item price is required').not().isEmpty()
    .isFloat()
    .withMessage('price should be a floating number'),
  check('image_url')
    .optional()
    .trim()
    .escape(),
  check('available_color').optional(),
  check('quantity', 'Quantity is required').not().isEmpty()
    .isInt()
    .withMessage('Quantity should be an integer'),
  check('is_active')
    .optional()
    .isBoolean()
];

export default checkNewProduct;
