import { signUpComponent, SignUpComponent} from './signUp.component';
import { SignUpCtrl } from './signUp.controller';

angular.module('coopex.components')
  .controller('SignUpCtrl', SignUpCtrl)
  .component(SignUpComponent, signUpComponent);
