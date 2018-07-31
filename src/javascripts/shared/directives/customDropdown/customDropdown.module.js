import { customDropdownComponent, CustomDropdownComponent } from './customDropdown.component';
import { CustomDropdownCtrl } from './customDropdown.controller';

angular.module('coopex.components')
  .controller('CustomDropdownCtrl', CustomDropdownCtrl)
  .component(CustomDropdownComponent, customDropdownComponent);
