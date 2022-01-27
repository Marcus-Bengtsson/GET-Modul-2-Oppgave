/**
 * Get user id
 * @description returns user with id
 */
function getUserWithId(id) {
    for (const user of model.data.users) {
        if (user.id === id) {
            return user;
        }
    }
    return null;
}

// return - keyword
    // gi meg verdien tilbake og ikke kjør mer kode




// for loop users
// if user.id === id
// return user
// return null;


/**
 * Get role
 * @description Gets the role assigned to user 
 * @param {number} id
 */
function getRoleFromUserId(id) {
    let user = getUserWithId(id);
    for (const role of model.data.roles) {
        if (user.roleId === role.id) {
            return role;
        }
    }
    return null;
}

function redirectToPage(page) {
    model.app.page = page;
    updateMainView();
}

function getArticles() {
    // TODO: Dashboard inputs
    // return articles from inputIds
    return model.data.articles;
}

