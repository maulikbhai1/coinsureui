import resetPasswordTmpl from './resetPassword.template.html';
import { ResetPasswordCtrl } from './resetPassword.controller';

export const ResetPasswordComponent = 'resetPasswordComponent';

export const resetPasswordComponent = {
  template	: resetPasswordTmpl,
  bindings 	: {
      onClose: '&',
  },
  controller: "ResetPasswordCtrl as vm"
};
