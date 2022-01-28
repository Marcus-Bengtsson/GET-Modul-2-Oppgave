function navBar() {
    return /*html*/`
    <nav aria-label="hoved" class="navbar-main">
        ${iconHTML('account_circle')}
        ${iconButtonHTML('logout', 'logout()')}
        ${iconRedirectButtonHTML('home', 'dashboard')}
        ${iconHTML('notifications', 'notification-icon')}
        ${iconRedirectButtonHTML('groups', 'groupList')}
        ${iconRedirectButtonHTML('poll', 'surveyPage')} 
    </nav>
    `
}

