

// lage ny gruppe
// check if group name already exist

function isUserInList(id) {
    const groupNew = model.inputs.groupNew;

    if( groupNew.managerIds.includes(id) === false && groupNew.userIds.includes(id) === false ) {
        return false;
    }
    return true;

}

function addUserToList() {
    let select = document.getElementById('userSelect');
    let userId = parseInt(select.value);
    
    if (isUserInList(userId) === false) {
        model.inputs.groupNew.userIds.push(userId);
        updateMainView();
    }
}

function addManagerToList() {
    let select = document.getElementById('managerSelect');
    let userId = parseInt(select.value);
    
    if (isUserInList(userId) === false) {
        model.inputs.groupNew.managerIds.push(userId);
        updateMainView();
    }
}
