import { check } from 'express-validator';

const checkNewOrder = [
  check('item', 'no item selected').not().isEmpty(),
];

export default checkNewOrder;
