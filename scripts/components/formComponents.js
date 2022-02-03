function emailInputHTML(value, onChange, placeholder = "type in email") {
  return `
    <input 
    value="${value}" 
    onchange="${onChange}" 
    type="email"
    placeholder="${placeholder}"
    required>`;
}

function passwordInputHTML(
  value,
  onChange,
  placeholder = "type in password",
  savePass = false
) {
  return `
    <input 
    value="${savePass ? value : ""}"
    onchange="${onChange}" 
    type="password"
    minlength="8"
    placeholder="${placeholder}"
    required>`;
}

/**
 * Input text component
 * @param {{labelText: string, value: string, onChange: string, placeholderText: string, isRequired: boolean}} inputObj
 * @returns HTML string with a div that has label and input with type text
 */
function inputTextWithLabelHTML(inputObj) {
  return /*html*/ `
    <div class="input-items">
    <label>${inputObj.labelText}</label>
    <input 
      onchange="${inputObj.onChange}"
      value="${inputObj.value}"
      type="text"
      placeholder="${inputObj.placeholderText}" 
      ${inputObj.isRequired ? "required" : ""} />
    </div>`;
}

/**
 * Input text component
 * @param {{labelText: string, onChange: string, isChecked: boolean}} inputObj
 * @returns HTML string with a div that has label and input with type checkbox
 */
function inputCheckboxWithLabelHTML(inputObj) {
  return /*html*/ `
    <div>
    <input 
      onchange="${inputObj.onChange}"
      type="checkbox"
      ${inputObj.isChecked ? "checked" : ""}>
    <label>${inputObj.labelText}</label>
    </div>`;
}

/**
 * 
 * @param {{labelText: string, value: string, onChange: string, content: string, 
 *          buttonText: string, buttonOnClick: string}} inputObj 
 * @returns HTML string with a div that has label and select with type dropbox
 */
function selectWithLabelHTML(inputObj) {
  return /*html*/ `
      <div class="flex-down">
      <label>${inputObj.labelText}</label>
        <div>
          <select
            onchange="${inputObj.onChange}"
            value="${inputObj.value}">
            <option value="-1">Velg fra liste</option>
            ${inputObj.content}
          </select>
          <button 
            onclick="${inputObj.buttonOnClick}">
            ${inputObj.buttonText}
          </button>
        </div>
      </div>`;
}

/**
 * Input text component
 * @param {{labelText: string, value: string, onChange: string, columns: string, rows: string}} inputObj
 * @returns HTML string with a div that has label and textarea element
 */
function textAreaWithLabelHTML(inputObj) {
  return `
    <div class="input-items">
    <label>${inputObj.labelText}</label>
    <textarea
    onchange="${inputObj.onChange}" cols="${inputObj.columns}" rows="${inputObj.rows}">${inputObj.value}</textarea>
  </div>`;
}
