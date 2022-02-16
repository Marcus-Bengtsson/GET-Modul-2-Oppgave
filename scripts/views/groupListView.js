function updateGroupListView () {
    let html = `<div class="group-list">
    <h1>Gruppeoversikt<h1>
    <div class="group-list-buttons">
        <button onclick="">Last ned PDF</button>
        <button onclick="redirectToPage('GroupComparison')">Sammenlign</button>
        <button onclick="redirectToPage('GroupEdit')">Rediger</button>
        <button onclick="redirectToPage('GroupNew')">Lag ny</button>
    </div>
<table class="group-list-table">
    <thead class="group-list-table-head">
        <tr>
        <th><input onchange="checkAllBox(this.checked)" type="checkbox" ${model.inputs.groupList.checkedAll ? "checked" : ""}></th>
        <th>Navn</th>
        <th>Tidsintervall</th>
        <th>Opprettelsesdato</th>
        <th>Antall undersøkelser</th>
        </tr>
    </thead>
    <tbody class="group-list-table-body">
    `
    for(const group of getGroupsFromUserID(model.app.userLoggedInId, true)) {
        html += `
        <tr>
            <td><input onchange="editMarkedGroups(this.checked, ${group.id})" type="checkbox" 
            ${model.inputs.groupList.markedGroupIds.includes(group.id) ? "checked" : ""}></td>
            <td onclick="setGroupSiteId(${group.id}); redirectToPage('GroupSite'); ">${group.name}</td>
            <td>${group.intervals}</td>
            <td>${group.startDate}</td>
            <td>${getSurveysFromGroupId(group.id).length}</td>
        </tr>
        `
    }

    html += `
    </tbody>
    </div>`
    return html;
}

function setGroupSiteId(groupId) {
    model.inputs.groupSite.groupId = groupId;
}