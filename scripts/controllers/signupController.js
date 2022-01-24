function goToLogin() {
    model.app.page = 'userLogin';
    updateMainView();
}

// handleSignupOnClick
    // checkIfUserExists
    // checkPasswords
    // createNewUser
    // model.app.page = 'login'
    // updateView

function handleSignupOnClick() {
    const signupInputs = model.inputs.userSignup;
    signupInputs.confirmEmail = null;
    signupInputs.confirmPassword = null;
    checkIfEmailUsed(model.inputs.userSignup.email);
    checkPasswords();
    if(signupInputs.confirmEmail === false || signupInputs.confirmPassword === false) {
        updateMainView();
        model.inputs.userSignup.password = "";
        return;
    }
    createNewUserFromSignup();
    model.app.page = 'userLogin';
    updateMainView();
}






// createNewUserFromSignup() | return;
// new object from input
function createNewUserFromSignup() {
    const userSignupInputs = model.inputs.userSignup;
    let highestId = getHighestIdFromArrayObj(model.data.users);
    let newUserId = highestId + 1;
    let newUser = {
        id: newUserId,
        firstName: userSignupInputs.firstName,
        lastName: userSignupInputs.lastName,
        email: userSignupInputs.email,
        password: userSignupInputs.password,
        roleId: 2,
        avatarId: 0,
    }
    model.data.users.push(newUser);
}


// checkIfUserExists(email)
// getUserByEmail
// if null then return true

function checkIfEmailUsed(email) {
    if (getUserByEmail(email) != null ) model.inputs.userSignup.confirmEmail == false;
    else model.inputs.userSignup.confirmEmail == true;
    return;
}

// checkPasswords() | returns true or false
// if password and confirmPassword is same
function checkPasswords() {
    if (model.inputs.userSignup.password === model.inputs.userSignup.confirmPassword) {
        model.inputs.userSignup.confirmCreation = true;
    }    
    else model.inputs.userSignup.confirmCreation = false;
}