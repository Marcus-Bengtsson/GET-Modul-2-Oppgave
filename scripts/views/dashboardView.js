function updateDashboardView () {
    return /*html*/`
    <div class="grid-dashboard">
      <nav class="navMenu" aria-label="cards">
          ${navbarCardUser()}
          ${navbarCard("Dine grupper", "Her er dine grupper")}
          ${navbarCard("Undersøkelser", "Din neste undersøkelse er i morgen")}
          ${navbarCard("Alle grupper (Admin)", "Alle grupper")}
      </nav>
      <article class="information">
        <h2>Informasjon</h2>
        <div class="information-cards">
          ${articleCards()}
        </div>
      </article>
    </div>`;
}

function navbarCardUser() {
  return /*html*/`
    <button class="navbar-card">
      <img/>
      <div>
          <h3>Hei ${getUserWithId(model.app.userLoggedInId).firstName}!</h3>
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
  // getArticles -> HTML using informationCard()
  

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