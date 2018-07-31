import walletTmpl from './wallet.template.html';
import { WalletCtrl } from './wallet.controller';

export const WalletComponent = 'walletComponent';

export const walletComponent = {
  template	: walletTmpl,
  bindings 	: {
      isCreateNewWallet: '<',
      onClose: '&'
  },
  controller: "WalletCtrl as vm"
};
