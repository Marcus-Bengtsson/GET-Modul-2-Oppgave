function updateLoginView() {
    let html = '';
    html += /*html*/`
    <h1>Login side</h1>
    <h2>Login to Continue</h2>
    <form name="login" onsubmit="handleLoginOnClick(); return false">
      <div>
        <label>Email: </label>
        <input value="${model.inputs.userLogin.email}" 
          onchange="model.inputs.userLogin.email = this.value" 
          type="email"
          placeholder="type in email"
          required>
      </div>
      <div>
        <label>Password: </label>
        <input onchange="model.inputs.userLogin.password = this.value" 
          type="password"
          placeholder="password here" 
          required>
      </div>
      <button
        type="submit">login</button>
     
    </article>
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

