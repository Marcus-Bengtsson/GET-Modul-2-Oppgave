function DevToolView() {
    const devTools = model.inputs.devTools;
    return `
        <div class="dev-tools">
            <details ontoggle="model.inputs.devTools.isOpen = this.hasAttribute('open')" ${devTools.isOpen ? 'open' : ''}>
                <summary>Dev tools</summary>
                <div>
                    <button style="margin: 0.5rem 0;" onclick="onClickLoginDev()">Login</button>
                    <button style="margin: 0.5rem 0;" onclick="onClickSignupDev()">Signup</button>
                </div>
                <textarea class="dev-tools-textarea" rows="25" cols="33">
                    ${JSON.stringify(model, null, 2)}
                </textarea>
            </details>
        </div>
    `
}