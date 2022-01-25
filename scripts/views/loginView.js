function updateLoginView() {
    return /*html*/`
    <h1>Login side</h1>
    <h2>Login to Continue</h2>
    <form name="login" onsubmit="handleLoginOnClick(); return false">
      <div class="input-items">
        <label>Email: </label>
        ${emailInputHTML(model.inputs.userLogin.email, "model.inputs.userLogin.email = this.value")}
      </div>
      <div class="input-items">
        <label>Password (minimum 8 characters): </label>
        ${passwordInputHTML(model.inputs.userLogin.password, "model.inputs.userLogin.password = this.value")}
      </div>
      <button type="submit">login</button>
    </form>
    <button onclick="oneClickLoginDev()">Dev login</button>
    <button onclick="redirectToSignUp()">Sign up</button>
    ${isUserLoginCorrect()}
    `
}

function isUserLoginCorrect(){
  const isCorrect = model.inputs.userLogin.isCorrect;
  if (isCorrect === false) {
    return '<p style="color: red;">Email or password is wrong</p>'    
  }
  return ''
}

