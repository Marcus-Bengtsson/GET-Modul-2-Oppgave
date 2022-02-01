// liste over deltagere
// liste over managers

// lage ny gruppe
// check if group name already exist

// addManagerToList(id)
// addUserToList(id)


function addManagerToInputs(id) {
    if (model.inputs.groupNew.managerIds.includes(id)) return;
    model.inputs.groupNew.managerIds.push(id)
    updateMainView();
}
function addUserToInputs(id) {
    if (model.inputs.groupNew.userIds.includes(id)) return;
    model.inputs.groupNew.userIds.push(id);
    updateMainView();
}

function getOptionManagers() {
    let optionManagers = []
    let managers = getUsersFromRoleId(1);
    if (managers == null) return [];
    for (const manager of managers) {
        if (model.inputs.groupNew.managerIds.includes(manager.id)) continue;
        optionManagers.push(manager);
    }
    return optionManagers;
}

function getOptionUsers() {
    let optionUsers = []
    let users = getUsersFromRoleId(2);
    if (users == null) return [];
    for (const user of users) {
        if (model.inputs.groupNew.userIds.includes(user.id)) continue;
        optionUsers.push(user);
    }
    return optionUsers;
}

function addUserToList() {
    let select = document.getElementById('userSelect');
    let value = parseInt(select.value);
    console.log(value);
    if (value == null) return;
    addUserToInputs(value);
}

function addManagerToList() {
    let select = document.getElementById('managerSelect');
    let value = parseInt(select.value);
    if (value == null) return;
    addManagerToInputs(value);
}
