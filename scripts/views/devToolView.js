function DevToolView() {
    return `
        <div class="model-info">
            <header>
                <h2 style="margin: 0;">Dev tools</h2>
                <button style="margin: 0.5rem 0;" onclick="onClickLoginDev()">Dev login</button>
                <button style="margin: 0.5rem 0;" onclick="onClickSignupDev()">Dev signup</button>
            </header>
            <textarea rows="25" cols="33">
                ${JSON.stringify(model, null, 2)}
            </textarea>
        </div>
    `
}