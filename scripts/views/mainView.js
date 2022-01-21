
updateMainView();
function updateMainView() {
  let html = '';
  html += updateLoginView();
  document.getElementById('app').innerHTML = html;  
}



// filstruktur
  // index.html
    // scripts
      // model.js
      // views
        // groupNewView.js
      // controller
        // groupNewController.js
        

