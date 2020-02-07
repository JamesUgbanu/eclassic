import { check } from 'express-validator';

const checkNewAddress = [
  check('first_name', 'First name is required')
    .not()
    .isEmpty()
    .trim()
    .escape(),
  check('last_name', 'last name is required')
    .not()
    .isEmpty()
    .trim()
    .escape(),
  check('email', 'email is required')
    .not().isEmpty()
    .isEmail()
    .withMessage('should be a valid email')
    .trim()
    .escape()
];

export default checkNewAddress;
