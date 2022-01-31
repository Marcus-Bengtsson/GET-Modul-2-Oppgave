function navBar() {
    return /*html*/`
    <nav aria-label="hoved" class="navbar-main">
        ${iconHTML('account_circle')}
        ${iconButtonHTML('logout', 'logout()')}
        ${iconRedirectButtonHTML('home', 'Dashboard')}
        ${iconHTML('notifications', 'notification-icon')}
        ${iconRedirectButtonHTML('groups', 'GroupList')}
        ${iconRedirectButtonHTML('poll', 'SurveyPage')} 
    </nav>
    `
}