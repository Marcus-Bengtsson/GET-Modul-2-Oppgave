updateMainView();

function updateMainView() {
  let html = '';
  const appPage = model.app.page;
  switch(appPage) {
    case 'userLogin': 
      html += updateLoginView();
      break;
    case 'userSignup': 
      html += updateSignUpView();
      break;
    default:
      html += `Error ${appPage} not found`
      break;
  }
  document.getElementById('app').innerHTML = html;
}