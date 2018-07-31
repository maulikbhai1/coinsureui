import { tradingProductComponent, TradingProductComponent } from './tradingProduct.component';
import { TradingProductCtrl } from './tradingProduct.controller';

angular.module('coopex.components')
  .controller('TradingProductCtrl', TradingProductCtrl)
  .component(TradingProductComponent, tradingProductComponent);
