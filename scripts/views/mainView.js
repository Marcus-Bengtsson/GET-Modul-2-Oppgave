const appElement = document.getElementById('app');
const showDevTools = true;

updateMainView();

function updateMainView() {
  const appPage = model.app.page;
  let showNavbar = true;

  switch (appPage) {
    case 'UserLogin':
      showNavbar = false;
      break;
    case 'UserSignup':
      showNavbar = false;
      break;
  }

  const appPageView = getAppPageView(appPage);

  appElement.innerHTML = `
    ${showDevTools ? DevToolView() : ''}
    <header class="grid-header">
      ${showNavbar ? UpdateNavbar() : ''}
    </header>
    <main class="grid-main">
      ${appPageView === undefined ? `<h2>Error ${appPage} not found</h2>` : appPageView()}
    </main>
    <footer class="grid-footer">
    </footer>`;
}

function getAppPageView(appPage = '') {
  return window[`update${appPage}View`];
}


