import { popupVerificationComponent, PopupVerificationComponent} from './popupVerification.component';
import { PopupVerificationCtrl } from './popupVerification.controller';

angular.module('coopex.components')
  .controller('PopupVerificationCtrl', PopupVerificationCtrl)
  .component(PopupVerificationComponent, popupVerificationComponent);
