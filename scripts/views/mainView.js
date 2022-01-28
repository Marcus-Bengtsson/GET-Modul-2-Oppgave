updateMainView();

function updateMainView() {
  let dev = true;
  let html = '';
  let hasNavbar = true;
  let main = '';

  const appPage = model.app.page;
  switch(appPage) {
    case 'userLogin': 
      main += updateLoginView();
      hasNavbar = false;
      break;
    case 'userSignup': 
      main += updateSignUpView();
      hasNavbar = false;
      break;
    case 'dashboard':
      main += updateDashboardView();
      break;
    default:
      main += `Error ${appPage} not found`
      break;
  }
  html = `
  ${dev ? UpdateModelInfoView() : ''}

  <header class="grid-header">
  ${hasNavbar ? navBar() : ''}
  </header>
  <main class="grid-main">
    ${main}
  </main>
  <footer class="grid-footer">

  </footer>`
  document.getElementById('app').innerHTML = html;
}

