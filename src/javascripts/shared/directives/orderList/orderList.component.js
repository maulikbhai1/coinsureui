import orderListTmpl from './orderList.template.html';
import { OrderListCtrl } from './orderList.controller';

export const OrderListComponent = 'orderListComponent';

export const orderListComponent = {
  template	: orderListTmpl,
  bindings 	: {

  },
  controller: "OrderListCtrl as vm"
};
