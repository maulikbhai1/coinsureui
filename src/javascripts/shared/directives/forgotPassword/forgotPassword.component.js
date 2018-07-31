import forgotPasswordTmpl from './forgotPassword.template.html';
import { ForgotPasswordCtrl } from './forgotPassword.controller';

export const ForgotPasswordComponent = 'forgotPasswordComponent';

export const forgotPasswordComponent = {
  template	: forgotPasswordTmpl,
  bindings 	: {
      onClose: '&',
  },
  controller: "ForgotPasswordCtrl as vm"
};
