function emailInputHTML(value, onChange, placeHolder = "type in email") {
    let pattern = "^[^@\s]+@[^@\s]+\.[^@\s]+$";
    return `<input value="${value}" 
    pattern="${pattern}"
    onchange="${onChange}" 
    type="email"
    placeholder="${placeHolder}"
    required>`;


    /*<input value="${model.inputs.userLogin.email}" 
          pattern="${pattern}"
          onchange="model.inputs.userLogin.email = this.value" 
          type="email"
          placeholder="type in email"
          required>*/
}
function passwordInputHTML(value, onChange, placeHolder = "type in password") {
    return `<input value="${value}" 
    onchange="${onChange}" 
    type="password"
    placeholder="${placeHolder}"
    required>`;
}