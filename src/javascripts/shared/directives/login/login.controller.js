class LoginCtrl {

    constructor () {
        this.model = {
            email: '',
            password: ''
        }
    }

    close () {
        this.onClose();
    }

    forgetPassword () {
        this.close();
        this.onForgetPassword();
    }
}

LoginCtrl.$inject = [];
export { LoginCtrl }
