function devSignup() {
    model.inputs.userSignup = {
        firstName: 'User',
        lastName: 'lastname',
        email: 'user@example.no',
        password: 'LastnamePassword1',
        confirmPassword: 'LastnamePassword1',
        confirmEmail: true,
        confirmCreation: true,
    }
    handleSignupOnClick()
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