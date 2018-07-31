import { identityComponent, IdentityComponent} from './identity.component';
import { IdentityCtrl } from './identity.controller';

angular.module('coopex.components')
  .controller('IdentityCtrl', IdentityCtrl)
  .component(IdentityComponent, identityComponent);
