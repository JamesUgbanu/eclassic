import { check } from 'express-validator';

const checkNewShipping = [
  check('address', 'address is required')
    .not()
    .isEmpty()
    .isLength({ max: 100 })
    .withMessage('address should be less than 100 char')
    .trim()
    .escape(),
  check('city', 'city is required')
    .not()
    .isEmpty()
    .isLength({ max: 50 })
    .withMessage('city should be less than 50 char')
    .trim()
    .escape(),
  check('state', 'state is required')
    .not()
    .isEmpty()
    .isLength({ max: 50 })
    .withMessage('state should be less than 50 char')
    .trim()
    .escape(),
  check('phone', 'phone is required')
    .not()
    .isEmpty()
    .isLength({ max: 12 })
    .withMessage('phone should be less than 12 char')
    .trim()
    .escape()
];

export default checkNewShipping;
