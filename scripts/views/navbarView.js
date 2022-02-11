function UpdateNavbar() {
  let iconInputs = {
    profile: {
      iconName: 'account_circle',
      page: 'UserProfile'
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
    devMod: {
      iconName: 'developer_mode',
      onClick: 'enableDev()'
    }
  }
  return /*html*/`
    <nav aria-label="hoved" class="navbar-main">
        ${iconRedirectButtonHTML(iconInputs.profile)}
        ${iconButtonHTML(iconInputs.logout)}
        ${iconRedirectButtonHTML(iconInputs.dashboard)}
        ${iconHTML(iconInputs.notifications)}
        ${iconRedirectButtonHTML(iconInputs.grouplist)}
        ${iconRedirectButtonHTML(iconInputs.survey)}
        ${iconButtonHTML(iconInputs.devMod)}
    </nav>
    `
}
