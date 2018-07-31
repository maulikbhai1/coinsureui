import { loginComponent, LoginComponent} from './login.component';
import { LoginCtrl } from './login.controller';

angular.module('coopex.components')
  .controller('LoginCtrl', LoginCtrl)
  .component(LoginComponent, loginComponent);
