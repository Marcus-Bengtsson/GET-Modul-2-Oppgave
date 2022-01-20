// Funksjoner
// userId - input
// Kode du skriver
// output





function getGroupsFromUserId(userId) {
    
}

function getUserById(userId) {
    const modelUsers = model.data.Users; 
    for (const element of modelUsers) {
        if (element.id === userId) return element;
    }
    return null;
}

function getAllEmailsFromUsers() {
    const modelUsers = model.data.Users;
    
    let emailList = [];

    for (const element of modelUsers) {
        emailList.push(element.email);
    }
    return emailList;
}

