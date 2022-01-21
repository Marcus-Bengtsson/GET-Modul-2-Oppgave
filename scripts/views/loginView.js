function updateLoginView() {
    let html = '';
    html += `
    <h1>Login side</h1>
    <h2>Login to Continue</h2>
    <form>
      <div>
        <label>Email: </label>
        <input type="email" placeholder="type in email" required>
      </div>
      <div>
        <label>Password: </label>
        <input type="password" required>
      </div>
      <input type="submit" value="login"/>
    </form>
    `
    return html;
}

/*
<h1>Login side</h1>
<h2>Login to Continue</h2>

<form>
  <div>
    <label>Email: </label>
    <input type="email" placeholder="type in email">
  </div>
  <div>
    <label>Password: </label>
    <input type="password">
  </div>
  <button>Login</button>
</form>

*/