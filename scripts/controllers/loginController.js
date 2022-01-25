/**
 * Login Button OnClick
 * @description Checks if user exists, and if user password is correct.
 * Sends error to user if login is wrong.
 */

function handleLoginOnClick() {
    const user = getUserByEmail(model.inputs.userLogin.email);
    
    if(user === null || user?.password != model.inputs.userLogin.password) {
        model.inputs.userLogin.isCorrect = false;
        model.inputs.userLogin.password = "";
    }
    if(model.inputs.userLogin.isCorrect === false) {
        updateMainView();
        model.inputs.userLogin.isCorrect = null;
        return;
    }

    model.inputs.userLogin.isCorrect = true;
    model.app.userLoggedInId = user.id;
    model.app.page = 'dashboard';
    updateMainView();
}

/**
 * Dev login
 * @description Automatically logins on click instead of developers having to type in login details
 */
function oneClickLoginDev() {
    model.inputs.userLogin.email = 'ola@example.com';
    model.inputs.userLogin.password = 'N0rdp@ssw0rd99_';
    handleLoginOnClick();
}

function redirectToSignUp(){
    model.app.page = 'userSignup';
    updateMainView();
}