function updateSignUpView() {
  let html = '';
  html += /*html*/`
  <h1>Sign up</h1>
  <h2>Sign up to get an account</h2>
  <article>
    <div>
      <label>First name </label>
      <input type="text" placeholder="First name" required>
    </div>
    <div>
      <label>Last name </label>
      <input type="text" placeholder="Last name" required>
    </div>
    <div>
      <label>Email: </label>
      <input type="email" placeholder="Type in email" required>
    </div>
    <div>
      <label>Password: </label>
      <input type="password" required placeholder="*****">
    </div>
    <div>
      <label>Confirm Password: </label>
      <input type="Password" placeholder="*****" required>
    </div>
    <input type="submit" value="Sign up"/>
  </article>
  <button onclick="goToLogin()">Return to login</button>
    `
  return html;
}