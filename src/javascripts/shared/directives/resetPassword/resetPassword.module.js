import { resetPasswordComponent, ResetPasswordComponent} from './resetPassword.component';
import { ResetPasswordCtrl } from './resetPassword.controller';

angular.module('coopex.components')
  .controller('ResetPasswordCtrl', ResetPasswordCtrl)
  .component(ResetPasswordComponent, resetPasswordComponent);
