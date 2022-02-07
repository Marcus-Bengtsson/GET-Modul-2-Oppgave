function navBar() {
    let iconInputs = {
        profile: {
            iconName: 'account_circle'
        },
        dashboard: {
            iconName: 'home',
            page: 'Dashboard'
        },
        notifications: {
            iconName: 'notifications',
            className: 'notification-icon'
        },
        logout: {
            onClick: 'logout()',
            iconName: 'logout',
        },
        grouplist: {
            iconName: 'groups',
            page: 'GroupList',
        },
        survey: {
          iconName: 'poll',
          page: 'SurveyPage', 
        },
    }
    return /*html*/`
    <nav aria-label="hoved" class="navbar-main">
        ${iconHTML(iconInputs.profile)}
        ${iconButtonHTML(iconInputs.logout)}
        ${iconRedirectButtonHTML(iconInputs.dashboard)}
        ${iconHTML(iconInputs.notifications)}
        ${iconRedirectButtonHTML(iconInputs.grouplist)}
        ${iconRedirectButtonHTML(iconInputs.survey)} 
    </nav>
    `
}
