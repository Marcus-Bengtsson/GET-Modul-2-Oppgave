/**
 * Get user from email
 * @param {string} email 
 * @returns user
 */


function getUserFromEmail(email) {
    email = email.toLowerCase();
    // Goes through the list of users and checks if the email belongs to one of them, if so it returns the user
    for (let user of model.data.users) {
        if (user.email.toLowerCase() === email) {
            return user;
        }
    }
    return null;
}

/**
 * Get user id
 * @description returns user from id
 */
 function getUserFromID(id) {
    for (const user of model.data.users) {
        if (user.id === id) {
            return user;
        }
    }
    return null;
}


// Role

/**
 * Get role
 * @description Gets the role assigned to user 
 * @param {number} id
 */
 function getRoleFromUserID(id) {
    let user = getUserFromID(id);
    for (const role of model.data.roles) {
        if (user.roleId === role.id) {
            return role;
        }
    }
    return null;
}