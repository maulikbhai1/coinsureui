import { orderHistoryComponent, OrderHistoryComponent} from './orderHistory.component';
import { OrderHistoryCtrl } from './orderHistory.controller';

angular.module('coopex.components')
  .controller('OrderHistoryCtrl', OrderHistoryCtrl)
  .component(OrderHistoryComponent, orderHistoryComponent);
