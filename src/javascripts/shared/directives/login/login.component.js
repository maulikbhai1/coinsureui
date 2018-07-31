import loginTmpl from './login.template.html';
import { LoginCtrl } from './login.controller';

export const LoginComponent = 'loginComponent';

export const loginComponent = {
  template	: loginTmpl,
  bindings 	: {
      onClose: '&',
      onForgetPassword: '&'
  },
  controller: "LoginCtrl as vm"
};
