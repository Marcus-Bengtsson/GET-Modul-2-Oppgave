
/**
 * @description Adds the groupId to the list of marked groups when they are turned on, and removes them when they are turned off.
 */
function editMarkedGroups(isChecked, groupId) {
    const markedGroupIds = model.inputs.groupList.markedGroupIds
    if (isChecked === true) {
        markedGroupIds.push(groupId);
    }
    if (isChecked === false) {
        model.inputs.groupList.checkedAll = false;
        let index = markedGroupIds.findIndex(function (id) {
            return id === groupId;
        });
        markedGroupIds.splice(index, 1);
    }
    updateMainView();
}

/**
 * @description Adds all missing groups to the marked group array
 */
function checkAllBox(isChecked) {
    let markedGroupIds = model.inputs.groupList.markedGroupIds;
    const groupIds = getGroupsFromUserID(model.app.userLoggedInId, true);
    if (isChecked === true) {
        model.inputs.groupList.checkedAll = true;
        model.inputs.groupList.markedGroupIds = [];
        for (const group of groupIds) {
            model.inputs.groupList.markedGroupIds.push(group.id);
        }
    }
    else if (isChecked === false) {
        model.inputs.groupList.markedGroupIds = [];
        model.inputs.groupList.checkedAll = false;
    }
    updateMainView();
}