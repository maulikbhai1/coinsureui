import { tipComponent, TipComponent} from './tip.component';
import { TipCtrl } from './tip.controller';

angular.module('coopex.components')
  .controller('TipCtrl', TipCtrl)
  .component(TipComponent, tipComponent);
