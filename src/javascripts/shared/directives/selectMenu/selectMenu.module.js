import { selectMenuComponent, SelectMenuComponent} from './selectMenu.component';
import { SelectMenuCtrl } from './selectMenu.controller';

angular.module('coopex.components')
  .controller('SelectMenuCtrl', SelectMenuCtrl)
  .component(SelectMenuComponent, selectMenuComponent);
