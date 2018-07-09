var currentTheme = 'theme--dark';
var isLoggedIn = false;
var isShow = {
    signUp: false,
    login: false,
    forgetPassword: false,
    resetPassword: false,
    identity: false
};

document.addEventListener ("DOMContentLoaded", function() {
    var headerLoginSection = document.getElementById('header-login-section-id');
    var headerManageSection = document.getElementById('header-manage-section-id');

    // if (isLoggedIn) {
    //     if (headerLoginSection) {
    //         headerLoginSection.classList.add('invisible');
    //     }

    //     if (headerManageSection) {
    //         headerManageSection.classList.remove('invisible');
    //     }
    // } else {
    //     if (headerLoginSection) {
    //         headerLoginSection.classList.remove('invisible');
    //     }

    //     if (headerManageSection) {
    //         headerManageSection.classList.add('invisible');
    //     }
    // }

});

function changeTheme () {
    if (currentTheme === 'theme--dark') {
        currentTheme = 'theme--light';
    } else {
        currentTheme = 'theme--dark';
    }

    var logoIcon = document.getElementById('header-logo-id');
    if (logoIcon) {
        if (currentTheme === 'theme--light') {
            logoIcon.classList.add('icon-logo--light');
            logoIcon.classList.remove('icon-logo--dark');
        } else {
            logoIcon.classList.remove('icon-logo--light');
            logoIcon.classList.add('icon-logo--dark');
        }
    }

    var headerThemeIcon = document.getElementById('header-theme-icon-id');
    if (headerThemeIcon) {
        if (currentTheme === 'theme--light') {
            headerThemeIcon.classList.add('icon--light-mode');
            headerThemeIcon.classList.remove('icon--night-mode');
        } else {
            headerThemeIcon.classList.remove('icon--light-mode');
            headerThemeIcon.classList.add('icon--night-mode');
        }
    }

    var body = document.body;
    if (body) {
        if (currentTheme === 'theme--light') {
            body.classList.add('theme--light');
            body.classList.remove('theme--dark');
        } else {
            body.classList.remove('theme--light');
            body.classList.add('theme--dark');
        }
    }
}

function showComponent (what) {
    switch (what) {
        case 'signUp':
            isShow.signUp = !isShow.signUp;
            var signUpPopup = document.getElementById('signup-popup-id');
            if (signUpPopup) {
                if (isShow.signUp) {
                    signUpPopup.classList.remove('invisible');
                } else {
                    signUpPopup.classList.add('invisible');
                }
            }
            break;

        case 'login':
            isShow.login = !isShow.login;
            var loginPopup = document.getElementById('login-popup-id');
            if (loginPopup) {
                if (isShow.login) {
                    loginPopup.classList.remove('invisible');
                } else {
                    loginPopup.classList.add('invisible');
                }
            }
            break;

        case 'forgetPassword':
            isShow.forgetPassword = !isShow.forgetPassword;
            var forgetPasswordPopup = document.getElementById('forgetPassword-popup-id');
            if (forgetPasswordPopup) {
                if (isShow.forgetPassword) {
                    forgetPasswordPopup.classList.remove('invisible');
                } else {
                    forgetPasswordPopup.classList.add('invisible');
                }
            }
            break;

        case 'resetPassword':
            isShow.resetPassword = !isShow.resetPassword;
            var resetPasswordPopup = document.getElementById('resetPassword-popup-id');
            if (resetPasswordPopup) {
                if (isShow.resetPassword) {
                    resetPasswordPopup.classList.remove('invisible');
                } else {
                    resetPasswordPopup.classList.add('invisible');
                }
            }
            break;

        case 'identity':
            isShow.identity = !isShow.identity;
            var identityPopup = document.getElementById('identity-popup-id');
            if (identityPopup) {
                if (isShow.identity) {
                    identityPopup.classList.remove('invisible');
                } else {
                    identityPopup.classList.add('invisible');
                }
            }
            break;
    }
}

function forgetPassword () {
    showComponent('login');
    showComponent('forgetPassword');
}

function signUpToLogin () {
    showComponent('signUp');
    showComponent('login');
}

function onSignUp () {
    var emailNotSentForm = document.getElementById('signUp-email-not-sent-id');
    var emailSentForm = document.getElementById('signUp-email-sent-id');
    if (emailNotSentForm) {
        emailNotSentForm.classList.add('invisible');
    }
    if (emailSentForm) {
        emailSentForm.classList.remove('invisible');
    }
}

function onForgetPassword () {
    var emailNotSentForm = document.getElementById('forgetPassword-email-not-sent-id');
    var emailSentForm = document.getElementById('forgetPassword-email-sent-id');
    if (emailNotSentForm) {
        emailNotSentForm.classList.add('invisible');
    }
    if (emailSentForm) {
        emailSentForm.classList.remove('invisible');
    }
}