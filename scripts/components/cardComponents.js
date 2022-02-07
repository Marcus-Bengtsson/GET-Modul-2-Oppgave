function navbarCardUser() {
  return /*html*/`
    <button class="navbar-card">
      <img/>
      <div>
          <h3>Hei ${getUserFromID(model.app.userLoggedInId).firstName}!</h3>
          <p>Velkommen til din side</p>
      </div>
  </button>`
}

function navbarCard(tittel, beskrivelse) {
  return /*html*/`
    <button class="navbar-card">
      <img/>
      <div>
          <h3>${tittel}</h3>
          <p>${beskrivelse}</p>
      </div>
    </button>`
}

function articleCards(){
  let html = ``;
    for (const article of getArticles()) {
      html += informationCard(article)
    }
  return html;
}
  

function informationCard(articleObj = model.data.articles[0]){
  return /*html*/`
    <a class="information-card" href="${articleObj.url}">
    <img src="${articleObj.imageURL}">
    <div>
      <h3>${articleObj.title}</h3>
      <p>${articleObj.description}</p>
    </div>
    </a>`
}