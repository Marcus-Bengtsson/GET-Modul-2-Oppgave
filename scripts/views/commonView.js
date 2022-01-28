function emailInputHTML(value, onChange, placeHolder = "type in email") {
    return `
    <input 
    value="${value}" 
    onchange="${onChange}" 
    type="email"
    placeholder="${placeHolder}"
    required>`;
}

function passwordInputHTML(value, onChange, placeHolder = "type in password", savePass = false) {
    return `
    <input 
    value="${savePass ? value : ''}"
    onchange="${onChange}" 
    type="password"
    minlength="8"
    placeholder="${placeHolder}"
    required>`;
}

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