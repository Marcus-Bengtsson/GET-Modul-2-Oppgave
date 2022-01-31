function getHighestIdFromArrayObj(input = []) {
    let highestId = 0;

    for (const obj of input) {
        if (obj?.id > highestId) highestId = obj.id;
    }
    return highestId;
}

function redirectToPage(page) {
    model.app.page = page;
    updateMainView();
}

function logout() {
    model.app.userLoggedInId = null;
    redirectToPage("UserLogin");
}