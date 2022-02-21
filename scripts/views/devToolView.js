function DevToolView() {
    const devTools = model.inputs.devTools;
    return `
        <div class="dev-tools">
            <details ontoggle="model.inputs.devTools.isOpen = this.hasAttribute('open')" ${devTools.isOpen ? 'open' : ''}>
                <summary>Dev tools</summary>
                <div>
                    <button style="margin: 0.5rem 0;" onclick="onClickLoginDev()">Login</button>
                    <button style="margin: 0.5rem 0;" onclick="openDevPopup()">Signup</button>
                </div>
                <textarea class="dev-tools-textarea" rows="25" cols="33">
                    ${JSON.stringify(model, null, 2)}
                </textarea>
            </details>
        </div>
    `
}

function popUp() {
    let inputText = '';
    return /*html*/`
    <div class="dev-tool">
        <div class="dev-tool-page">
            <label>Change page</label>
            <input type="text" onchange="inputText = this.value" />
            <button onclick="window.opener.redirectToPage(inputText)">Page</button>
        </div>
        <div class="dev-tool-login">
            <select>
                <option value="">Select user</option>
                <option value="">Bruker</option>
                <option value="">Admin</option>
                <option value="">Manager</option>
            </select>
            <button style="margin: 0.5rem 0;" onclick="window.opener.onClickLoginDev()">Login</button>
            <button style="margin: 0.5rem 0;">Signup</button>
        </div>
    </div>`;
}

function getModel() {
    return model;
}

function openDevPopup() {
    let newWindow = open('/', 'example', 'width=300,height=300');
    newWindow.onload = function () {
        newWindow.document.body.innerHTML = popUp();
    };
}
