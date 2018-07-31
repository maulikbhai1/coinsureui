import { forgotPasswordComponent, ForgotPasswordComponent} from './forgotPassword.component';
import { ForgotPasswordCtrl } from './forgotPassword.controller';

angular.module('coopex.components')
  .controller('ForgotPasswordCtrl', ForgotPasswordCtrl)
  .component(ForgotPasswordComponent, forgotPasswordComponent);
