import tradingProductTmpl from './tradingProduct.template.html';
import { TradingProductCtrl } from './tradingProduct.controller';

export const TradingProductComponent = 'tradingProductComponent';

export const tradingProductComponent = {
  template	: tradingProductTmpl,
  bindings 	: {

  },
  controller: "TradingProductCtrl as vm"
};
