class SignUpCtrl {

    constructor() {
        this.model = {
            email: '',
            password: '',
            confirmPassword: '',
            isAgree: false
        };
        this.isEmailSent = false;
    }

    close() {
        this.isEmailSent = false;
        this.onClose();
    }

    login () {
        this.close();
        this.onLogin();
    }

    signUp () {
        this.isEmailSent = true;
    }
}

SignUpCtrl.$inject = [];
export { SignUpCtrl }
