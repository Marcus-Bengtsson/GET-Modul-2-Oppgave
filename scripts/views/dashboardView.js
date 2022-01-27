function updateDashboardView () {
    return /*html*/`
    <div class="grid-dashboard">
      <nav class="navMenu" aria-label="cards">
          ${navbarCard()}
          ${navbarCard()}
          ${navbarCard()}
          ${navbarCard()}
      </nav>
      <article class="information">
        <h2>Informasjon</h2>
        <div class="information-cards">
          ${informationCard()}
          ${informationCard()}
          ${informationCard()}
        </div>
      </article>
    </div>`;
}

function navbarCard() {
  return /*html*/`
    <button>
      <img/>
      <div>
          <h3>Hei, navn</h3>
          <p>Beskrivelse</p>
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

/*
 */