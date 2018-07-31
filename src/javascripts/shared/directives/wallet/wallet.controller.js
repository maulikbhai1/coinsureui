class WalletCtrl {

    constructor() {
        this.selectedStep = 1;
        this.wallet = {
            password: null,
            privateKey: '749298asd3s12ssasdashjfgh234fw4'
        };
        this.isShowPassword = false;
    }

    selectStep (number) {
        this.selectedStep = number;
    }

    close() {
        this.onClose();
    }

    togglePassword() {
        this.isShowPassword = !this.isShowPassword;
    }

    createNewWallet() {
        this.selectStep(2);
    }

    continue() {
        this.selectStep(3);
    }

    finish() {
        this.onClose();
    }
}

WalletCtrl.$inject = [];
export { WalletCtrl }
