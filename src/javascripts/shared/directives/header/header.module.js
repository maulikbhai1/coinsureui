import {headerComponent, HeaderComponent} from './header.component';
import { HeaderCtrl } from './header.controller';

angular.module('coopex.components')
  .controller('HeaderCtrl', HeaderCtrl)
  .component(HeaderComponent, headerComponent);
