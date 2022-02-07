function updateGroupSiteView () {
    if (model.inputs.groupSite.groupId === null) model.inputs.groupSite.groupId = 0;
    const group = getGroupFromGroupId(model.inputs.groupSite.groupId);
    let html = `
    <div class="group-site-buttons">
        <button onclick="">Send undersøkelse</button>
        <button onclick="redirectToPage('Comments')">Kommentarer</button>
        <button onclick="">Last ned PDF</button>
        <button onclick="redirectToPage('GroupSiteEdit')">Rediger</button>
    </div>
    <h1 class="group-site-h1">${group.name}</h1>
    <div class="group-site-infoBoxes">
        <div>
            <h3>Tidsintervall</h3>
            <p>${group.intervals}</p>
        </div>
        <div>
            <h3>Antall undersøkelser</h3>
            <p>${getSurveysFromGroupId(group.id).length}</p>
        </div>
        <div>
        <h3>Neste undersøkelse</h3>
        <p>${'21/01/2022'}</p>
        </div>
    </div>
    <table class="group-site-participantList">
    <th>Deltakerliste</th>
    `
    for(let i = 0; i < group.userIds.length; i++) {
        const user = getUserFromID(group.userIds[i]);
        html += `
        <tr>
            <td>${user.firstName} ${user.lastName}</td>
        </tr>
        `
    }
    html += `</table>`
    return html;
}