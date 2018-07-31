import tipTmpl from './tip.template.html';
import { TipCtrl } from './tip.controller';

export const TipComponent = 'tipComponent';

export const tipComponent = {
  template	: tipTmpl,
  bindings 	: {
      tipNumber: '<',
  },
  controller: "TipCtrl as vm"
};
