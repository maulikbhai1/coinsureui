import selectMenuTmpl from './selectMenu.template.html';
import { SelectMenuCtrl } from './selectMenu.controller';

export const SelectMenuComponent = 'selectMenuComponent';

export const selectMenuComponent = {
  template	: selectMenuTmpl,
  bindings 	: {
      itemList: '<',
      useMobileView: '<',
      onSelectItem: '&'
  },
  controller: 'SelectMenuCtrl as vm'
};
