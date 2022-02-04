function updateUserLoginView() {
  const userLogin = model.inputs.userLogin;
    const userLoginViewInputs = {
        email: {
          labelText: 'Epost:',
          value: userLogin.email,
          onChange: 'model.inputs.userLogin.email = this.value',
          placeholderText: 'Skriv inn email..',
          isRequired: true,
        },
        password: {
          labelText: 'Passord:',
          savePass: false,
          value: userLogin.password,
          onChange: 'model.inputs.userLogin.password = this.value',
          placeholderText: 'Skriv inn passord..'
        }
      }
        
  return /*html*/`
       <div>
       <h1>Logg inn</h1>
       <form id="login-form" onsubmit="handleLoginOnClick(); return false">
         ${inputEmailWithLabeHTML(userLoginViewInputs.email)}
         ${passwordInputWithLabelHTML(userLoginViewInputs.password)}         
       </form>
       <button form="login-form" type="submit">Logg inn</button>
       <button onclick="redirectToPage('UserSignup')">Registrer</button>
        ${userLogin.isCorrect === false ? '<p style="color: red;">Email or password is wrong</p>' : ''}
      </div>`
}