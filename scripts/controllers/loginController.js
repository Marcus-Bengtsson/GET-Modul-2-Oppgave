function handleLoginOnClick() {
    const user = getUserByEmail(model.inputs.userLogin.email);
    
    // Checks if user exists, and if user password is correct.
    if(user === null || user?.password != model.inputs.userLogin.password) {
        model.inputs.userLogin.isCorrect = false;
        model.inputs.userLogin.password = "";
    }
    // Checks if user login is wrong and then gives out an error to user
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

function justlogin() {
    model.inputs.userLogin.email = 'ola@example.com';
    model.inputs.userLogin.password = 'N0rdp@ssw0rd99_';
    handleLoginOnClick();
}


function goToSignUp(){
    model.app.page = 'userSignup';
    updateMainView();
}