function updateSignUpView() {
  let html = '';
  html += /*html*/`
  <h1>Sign up</h1>
  <h2>Sign up to get an account</h2>
  <form name="login" onsubmit="handleSignupOnClick(); return false">
    <div>
      <label>First name </label>
      <input onchange="model.inputs.userSignup.firstName = this.value"
       type="text" 
       placeholder="First name" 
       required>
    </div>
    <div>
      <label>Last name </label>
      <input onchange="model.inputs.userSignup.lastName = this.value"
       type="text" 
       placeholder="Last name" 
       required>
    </div>
    <div>
      <label>Email: </label>
      ${emailInputHTML(model.inputs.userSignup.email, "model.inputs.userSignup.email = this.value")}
    </div>
    <div>
      <label>Password: </label>
      ${passwordInputHTML(model.inputs.userSignup.password, "model.inputs.userSignup.password = this.value")}
    </div>
    <div>
      <label>Confirm Password: </label>
      ${passwordInputHTML(model.inputs.userSignup.confirmPassword, "model.inputs.userSignup.confirmPassword = this.value")}
    </div>
    <input type="submit" value="Sign up"/>
  </form>
  <button onclick="goToLogin()">Return to login</button>
  ${doPasswordsMatch()}
  ${isEmailUnique()}
    `
  return html;
}

function doPasswordsMatch(){
  const isCorrect = model.inputs.userSignup.confirmCreation;
  if (isCorrect === false) {
    return '<p style="color: red;">Passwords do not match</p>'
  }
  return '';
}
function isEmailUnique(){
  const isCorrect = model.inputs.userSignup.confirmEmail;
  if (isCorrect === false) {
    return '<p style="color: red;">Email has already been used</p>'
  }
  return '';
}