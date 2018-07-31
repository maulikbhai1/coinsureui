import { orderListComponent, OrderListComponent} from './orderList.component';
import { OrderListCtrl } from './orderList.controller';

angular.module('coopex.components')
  .controller('OrderListCtrl', OrderListCtrl)
  .component(OrderListComponent, orderListComponent);
