updateMainView();

function updateMainView() {
  let html = '';
  html += /*html*/`

  `

  let main = '';
  

  const appPage = model.app.page;
  switch(appPage) {
    case 'userLogin': 
      main += updateLoginView();
      break;
    case 'userSignup': 
      main += updateSignUpView();
      break;
    case 'dashboard':
      main += updateDashboardView();
      break;
    default:
      main += `Error ${appPage} not found`
      break;
  }
  html = `
  <header class="grid-header">
    <h1>${model.app.page}</h1>
  </header>
  <main class="grid-main">
    ${main}
  </main>
  <footer class="grid-footer">

  </footer>`
  document.getElementById('app').innerHTML = html;
}