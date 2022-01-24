
updateMainView();
function updateMainView() {
  let html = '';
  if(model.app.page === 'userLogin') {
    html += updateLoginView();
  }
  if (model.app.page === 'userSignup') {
    html += updateSignUpView();
  }
  document.getElementById('app').innerHTML = html;
}

