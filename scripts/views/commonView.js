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