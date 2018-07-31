import { buySellComponent, BuySellComponent} from './buySell.component';
import { BuySellCtrl } from './buySell.controller';

angular.module('coopex.components')
  .controller('BuySellCtrl', BuySellCtrl)
  .component(BuySellComponent, buySellComponent);
