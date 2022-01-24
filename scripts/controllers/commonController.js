function getUserByEmail(email) {
    email = email.toLowerCase();
    // Goes through the list of users and checks if the email belongs to one of them, if so it returns the user
    for (let user of model.data.users) {
        if (user.email.toLowerCase() == email) {
            return user;
        }
    }
    return null;
}