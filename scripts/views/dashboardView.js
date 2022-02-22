function updateDashboardView () {
    return /*html*/`
    <div class="grid-dashboard">
      <nav class="navMenu" aria-label="cards">
          ${navbarCardUser()}
          ${navbarCard("Dine grupper", "Her er dine grupper", "redirectToPage('GroupList')")}
          ${navbarCard("Undersøkelser", "Din neste undersøkelse er i morgen", "redirectToPage('SurveyPage')")}
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
