import orderHistoryTmpl from './orderHistory.template.html';
import { OrderHistoryCtrl } from './orderHistory.controller';

export const OrderHistoryComponent = 'orderHistoryComponent';

export const orderHistoryComponent = {
  template	: orderHistoryTmpl,
  bindings 	: {

  },
  controller: "OrderHistoryCtrl as vm"
};
