import popupVerificationTmpl from './popupVerification.template.html';
import { PopupVerificationCtrl } from './popupVerification.controller';

export const PopupVerificationComponent = 'popupVerificationComponent';

export const popupVerificationComponent = {
  template	: popupVerificationTmpl,
  bindings 	: {
      verificationType: '<',
      onClose: '&'
  },
  controller: "PopupVerificationCtrl as vm"
};
