import headerTmpl from './header.template.html';
import { HeaderCtrl } from './header.controller';

export const HeaderComponent = 'headerComponent';

export const headerComponent = {
  template	: headerTmpl,
  bindings 	: {

  },
  controller: "HeaderCtrl as vm"
};
