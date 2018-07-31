class ResetPasswordCtrl {

    constructor() {
        this.model = {
            password: '',
            confirmPassword: ''
        };
        this.isUpdated = false;
        this.isShowError = false;
    }

    close() {
        this.isUpdated = false;
        this.onClose();
    }

    reset () {
        if (this.model.password !== '' && this.model.password === this.model.confirmPassword) {
            this.isShowError = false;
            this.isUpdated = true;
            this.close();

        } else {
            this.isShowError = true;

        }
    }
}

ResetPasswordCtrl.$inject = [];
export { ResetPasswordCtrl }
