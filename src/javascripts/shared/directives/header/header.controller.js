class HeaderCtrl {

    constructor() {
        // this.isShowWalletDropdown = false;
        this.themeClass = 'theme--dark';
        // this.verificationType = null;
        // this.isShowNewWallet = false;
        this.changeMode();
        this.isShow = {
            signUp: false,
            login: false,
            forgetPassword: false,
            resetPassword: false,
            identity: false
        };
        this.isLoggedIn = false;
    }

    // toggleWallet () {
    //     this.isShowWalletDropdown = !this.isShowWalletDropdown;
    // }

    changeMode () {
        let oldTheme = this.themeClass;

        if (oldTheme === 'theme--light') {
            this.themeClass = 'theme--dark';

        } else {
            this.themeClass = 'theme--light';

        }

        document.body.className = this.themeClass;
    }

    // selectVerificationMethod(type) {
    //     this.verificationType = type;
    // }
    //
    // closeVerification() {
    //     this.verificationType = null;
    // }
    //
    // showNewWallet() {
    //     this.isShowNewWallet = true;
    // }
    //
    // closeNewWallet() {
    //     this.isShowNewWallet = false;
    // }

    show (what) {
        switch (what) {
            case 'signUp':
                this.isShow.signUp = !this.isShow.signUp;
                break;

            case 'login':
                this.isShow.login = !this.isShow.login;
                break;

            case 'forgetPassword':
                this.isShow.forgetPassword = !this.isShow.forgetPassword;
                break;

            case 'resetPassword':
                this.isShow.resetPassword = !this.isShow.resetPassword;
                break;

            case 'identity':
                this.isShow.identity = !this.isShow.identity;
                break;
        }
    }
}

HeaderCtrl.$inject = [];
export { HeaderCtrl }
