import { check } from 'express-validator';

const checkNewOrder = [
  check('customer_id', 'customer id is required').not().isEmpty(),
  check('item', 'no item selected').not().isEmpty(),
];

export default checkNewOrder;
