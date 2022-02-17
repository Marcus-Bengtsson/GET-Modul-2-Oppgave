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
    <thead style="border: solid black 1px;" class="group-list-table-head">
        <tr>
            <th><input onchange="checkAllBox(this.checked)" type="checkbox" ${model.inputs.groupList.checkedAll ? "checked" : ""}></th>
            <th>Navn</th>
            <th>Neste undersøkelse</th>
            <th>Forrige undersøkelse</th>
            <th>Tidsintervall</th>
            <th>Antall undersøkelser</th>
            <th>Opprettelsesdato</th>
        </tr>
    </thead>
    <tbody class="group-list-table-body">
    `
    for(const group of getGroupsFromUserID(model.app.userLoggedInId, true)) {
        let nextSurvey = getNextSurveyDate(group);
        let mostRecentSurvey = new Date(getMostRecentSurveyFromGroupId(group.id).date).toDateString();
        if(nextSurvey == "Invalid Date") nextSurvey = "Ingen undersøkelser funnet";
        if(mostRecentSurvey == "Invalid Date") mostRecentSurvey = "Ingen undersøkelser fullført";
        html += `
        <tr>
            <td><input onchange="editMarkedGroups(this.checked, ${group.id})" type="checkbox" 
                            ${model.inputs.groupList.markedGroupIds.includes(group.id) ? "checked" : ""}></td>
            <td onclick="setGroupSiteId(${group.id}); redirectToPage('GroupSite'); ">${group.name}</td>
            <td>${nextSurvey}</td>
            <td>${mostRecentSurvey}</td>
            <td>${group.intervals}</td>
            <td>${getSurveysFromGroupId(group.id).length}</td>
            <td>${group.startDate}</td>
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