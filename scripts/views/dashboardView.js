function updateDashboardView () {
    return /*html*/`
  <main class="dashboard-main">
    <nav class="navMenu">
        ${navbarCard()}
        ${navbarCard()}
        ${navbarCard()}
        ${navbarCard()}
    </nav>
    <article class="information">
      <h2>Informasjon</h2>
      ${informationCard()}
      ${informationCard()}
      ${informationCard()}
    </article>
  </main>`;
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
function informationCard(){
    return /*html*/`
    <button class="information-card">
    <img/>
    <div>
      <h3>Tittel</h3>
      <p>Beskrivelse</p>
    </div>
 </button>`
    
}

/*
 */