updateMainView();

function updateMainView() {
  let dev = true;
  let html = '';
  let hasNavbar = true;
  let main = '';

  const appPage = model.app.page;
  let viewFunction = getUpdateViewFunction(appPage);

  if (viewFunction == undefined) {
    main = `<h2>Error ${appPage} not found</h2>`
  } else {
    main = viewFunction();
  }

  switch(appPage) {
    case 'UserLogin':
      hasNavbar = false;
      break;
    case 'UserSignup': 
      hasNavbar = false;
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
  if (appPage == 'GroupSite') {
    new Chart('myDonut', donutChart);
    new Chart('lineChart', lineChart); 
  }
}

function getUpdateViewFunction(appPage = '') {
  let name = `update${appPage}View`;
  return window[name];
}


