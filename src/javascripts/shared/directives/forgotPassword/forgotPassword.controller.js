class ForgotPasswordCtrl {

    constructor() {
        this.model = {
            email: '',
        };
        this.isEmailSent = false;
    }

    close() {
        this.isEmailSent = false;
        this.onClose();
    }

    reset () {
        this.isEmailSent = true;
    }
}

ForgotPasswordCtrl.$inject = [];
export { ForgotPasswordCtrl }
