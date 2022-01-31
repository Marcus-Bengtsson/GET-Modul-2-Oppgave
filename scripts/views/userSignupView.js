function updateUserSignupView() {
  let html = '';
  html += /*html*/`
  <div>
  <h1>Sign up</h1>
  <h2>Sign up to get an account</h2>
  <form name="login" onsubmit="handleSignupOnClick(); return false">
    <div class="input-items">
      <label>First name </label>
      <input
        value="${model.inputs.userSignup.firstName}"
        onchange="model.inputs.userSignup.firstName = this.value"
        type="text" 
        placeholder="First name" 
        required>
    </div>
    <div class="input-items">
      <label>Last name </label>
      <input 
       value="${model.inputs.userSignup.lastName}"
       onchange="model.inputs.userSignup.lastName = this.value"
       type="text" 
       placeholder="Last name" 
       required>
    </div>
    <div class="input-items">
      <label>Email: </label>
      ${emailInputHTML(model.inputs.userSignup.email, "model.inputs.userSignup.email = this.value")}
    </div>
    <div class="input-items">
      <label>Password (minimum 8 characters): </label>
      ${passwordInputHTML(model.inputs.userSignup.password, "model.inputs.userSignup.password = this.value")}
    </div>
    <div class="input-items">
      <label>Confirm Password: </label>
      ${passwordInputHTML(model.inputs.userSignup.confirmPassword, "model.inputs.userSignup.confirmPassword = this.value")}
    </div>
    <input type="submit" value="Sign up"/>
  </form>
  <button onclick="returnToLoginPage()">Return to login</button>
  ${doPasswordsMatch()}
  ${isEmailUnique()}
  </div>
    `
  return html;
}

function doPasswordsMatch() {
  const isCorrect = model.inputs.userSignup.confirmCreation;
  if (isCorrect === false) {
    return '<p style="color: red;">Passwords do not match</p>'
  }
  return '';
}

function isEmailUnique() {
  const isCorrect = model.inputs.userSignup.confirmEmail;
  if (isCorrect === false) {
    return '<p style="color: red;">Email has already been used</p>'
  }
  return '';
}