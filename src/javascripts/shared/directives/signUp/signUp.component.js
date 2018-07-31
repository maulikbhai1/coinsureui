import signUpTmpl from './signUp.template.html';
import { SignUpCtrl } from './signUp.controller';

export const SignUpComponent = 'signUpComponent';

export const signUpComponent = {
  template	: signUpTmpl,
  bindings 	: {
      onClose: '&',
      onLogin: '&'
  },
  controller: "SignUpCtrl as vm"
};
