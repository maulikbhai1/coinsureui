import customDropdownTmpl from './customDropdown.template.html';
import { CustomDropdownCtrl } from './customDropdown.controller';

export const CustomDropdownComponent = 'customDropdownComponent';

export const customDropdownComponent = {
  template	: customDropdownTmpl,
  bindings 	: {
      items: '<',
      currentValue: '=',
      placeholder: '<',
      onSelectItem: '&'
  },
  controller: "CustomDropdownCtrl as vm"
};
