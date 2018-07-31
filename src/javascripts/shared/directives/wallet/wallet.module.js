import { walletComponent, WalletComponent} from './wallet.component';
import { WalletCtrl } from './wallet.controller';

angular.module('coopex.components')
  .controller('WalletCtrl', WalletCtrl)
  .component(WalletComponent, walletComponent);
