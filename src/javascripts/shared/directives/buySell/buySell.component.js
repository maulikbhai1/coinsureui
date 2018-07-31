import buySellTmpl from './buySell.template.html';
import { BuySellCtrl } from './buySell.controller';

export const BuySellComponent = 'buySellComponent';

export const buySellComponent = {
  template	: buySellTmpl,
  bindings 	: {

  },
  controller: "BuySellCtrl as vm"
};
