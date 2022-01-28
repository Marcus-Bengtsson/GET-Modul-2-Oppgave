function returnToLoginPage() {
    model.app.page = 'userLogin';
    updateMainView();
}
/**
 * Sign up
 * @description Checks if email and password is ok, then adds new user if there's no error.
 */
function handleSignupOnClick() {
    const signupInputs = model.inputs.userSignup;
    signupInputs.confirmEmail = null;
    signupInputs.confirmCreation = null;
    checkIfEmailUsed(model.inputs.userSignup.email);
    checkPasswords();
    if(signupInputs.confirmEmail === false || signupInputs.confirmCreation === false) {
        updateMainView();
        model.inputs.userSignup.password = "";
        return;
    }
    createNewUserFromSignup();
    model.app.page = 'userLogin';
    resetSignupInputs();
    updateMainView();
    return;
}

function resetSignupInputs() {
    model.inputs.userSignup.email = '';
    model.inputs.userSignup.firstName = '';
    model.inputs.userSignup.lastName = '';
    model.inputs.userSignup.password = '';
    model.inputs.userSignup.confirmEmail = null;
    model.inputs.userSignup.confirmPassword = null;
}

function devSignup() {
    model.inputs.userSignup.email = 'lillie@example.com';
    model.inputs.userSignup.firstName = 'Lillie';
    model.inputs.userSignup.lastName = 'Rugtveit';
    model.inputs.userSignup.password = 'Password123123';
    model.inputs.userSignup.confirmPassword = 'Password123123';
    model.inputs.userSignup.confirmEmail = true;
    model.inputs.userSignup.confirmCreation = true;
    handleSignupOnClick()
}

/**
 * Create new user
 * @description creates new user and gives the user an ID.
 */
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

/**
 * Email verification
 * @description if email is used by another user,
 * then change userSignup.confirmEmail in model to be false.
 * @param {string} email 
 */
function checkIfEmailUsed(email) {
    if (getUserByEmail(email) != null ) model.inputs.userSignup.confirmEmail == false;
    else model.inputs.userSignup.confirmEmail == true;
}

/**
 * Password verification
 * @description checks if passwords are equal.
 */
function checkPasswords() {
    if (model.inputs.userSignup.password === model.inputs.userSignup.confirmPassword) {
        model.inputs.userSignup.confirmCreation = true;
    }    
    else model.inputs.userSignup.confirmCreation = false;
}