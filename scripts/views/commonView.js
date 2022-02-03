function iconButtonHTML(iconName, onclick, className = '') {
    return /*html*/`
    <button class="icon-button" onclick="${onclick}">
        <span class="material-icons ${className}">
            ${iconName}
        </span>
    </button>
    `;
}

function iconRedirectButtonHTML(iconName, page, className = '') {
    return /*html*/`
    <button class="icon-button" onclick='redirectToPage("${page}")'>
        <span class="material-icons ${className}">
            ${iconName}
        </span>
    </button>
    `;
}

function iconHTML(iconName, className = '') {
    return /*html*/`
    <span class="material-icons ${className}">
        ${iconName}
    </span>
    `;
}