function UpdateModelInfoView() {
    return `
        <div class="model-info">
            <header>
                <h2>Dev tools</h2>
                <button onclick="oneClickLoginDev()">Dev login</button>
                <button onclick="devSignup()">Dev signup</button>
            </header>
            <textarea rows="25" cols="33">
                ${JSON.stringify(model, null, 2)}
            </textarea>
        </div>
    `
}