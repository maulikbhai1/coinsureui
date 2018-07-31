import orderBookTmpl from './orderBook.template.html';
import { OrderBookCtrl } from './orderBook.controller';

export const OrderBookComponent = 'orderBookComponent';

export const orderBookComponent = {
  template	: orderBookTmpl,
  bindings 	: {

  },
  controller: "OrderBookCtrl as vm"
};
