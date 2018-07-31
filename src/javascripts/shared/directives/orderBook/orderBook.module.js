import { orderBookComponent, OrderBookComponent} from './orderBook.component';
import { OrderBookCtrl } from './orderBook.controller';

angular.module('coopex.components')
  .controller('OrderBookCtrl', OrderBookCtrl)
  .component(OrderBookComponent, orderBookComponent);
