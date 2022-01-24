function updateLoginView() {
    let html = '';
    let pattern = "^[^@\s]+@[^@\s]+\.[^@\s]+$";
    html += /*html*/`
    <h1>Login side</h1>
    <h2>Login to Continue</h2>
    <form name="login" onsubmit="handleLoginOnClick(); return false">
      <div>
        <label>Email: </label>
        ${emailInputHTML(model.inputs.userLogin.email, "model.inputs.userLogin.email = this.value")}
      </div>
      <div>
        <label>Password: </label>
        ${passwordInputHTML(model.inputs.userLogin.password, "model.inputs.userLogin.password = this.value")}
      </div>
      <button type="submit">login</button>
      
     
    </form>
    <button onclick="justlogin()">Dev login</button>
    <button onclick="goToSignUp()">Sign up</button>
    ${isUserLoginCorrect()}
    `
    return html;
}

function isUserLoginCorrect(){
  const isCorrect = model.inputs.userLogin.isCorrect;
  if (isCorrect === false) {
    return '<p style="color: red;">Email or password is wrong</p>'    
  }
  return ''
}

