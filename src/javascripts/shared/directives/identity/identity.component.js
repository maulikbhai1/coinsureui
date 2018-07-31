import identityTmpl from './identity.template.html';
import { IdentityCtrl } from './identity.controller';

export const IdentityComponent = 'identityComponent';

export const identityComponent = {
  template	: identityTmpl,
  bindings 	: {
      onClose: '&',
      onForgetPassword: '&'
  },
  controller: "IdentityCtrl as vm"
};
