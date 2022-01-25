updateMainView();

function updateMainView() {
  let html = '';
  html += /*html*/`
  <header class="header">
    <h1>${model.app.page}</h1>
  </header>
  `
  const appPage = model.app.page;
  switch(appPage) {
    case 'userLogin': 
      html += updateLoginView();
      break;
    case 'userSignup': 
      html += updateSignUpView();
      break;
    case 'dashboard':
      html += updateDashboardView();
      break;
    default:
      html += `Error ${appPage} not found`
      break;
  }
  document.getElementById('app').innerHTML = html;
}