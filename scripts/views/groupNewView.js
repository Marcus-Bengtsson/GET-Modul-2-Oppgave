function updateGroupNewView() {
  return /*html*/ `
    <style>
    .group-new {
      display: grid;
      grid-template-columns: auto auto;
      padding: 1rem;
      color: hsl(0, 0%, 90%);
      width: 70%;
    }

    .flex-right {
      display: flex;
    }

    .flex-down {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
  </style>    
  <div class="group-new">
    <div class="right">
      <h1>Ny Gruppe</h1>
      <div class="input-items">
        <label>Lag ny gruppe</label>
        <input type="text" placeholder="Skriv gruppe navn.." required />
      </div>
      <div class="input-items">
        <label>Beskrivelse av gruppen</label>
        <textarea value="${model.inputs.groupNew.description}"
        onchange="model.inputs.description = this.value" cols="30" rows="10"></textarea>
      </div>
      <div>
        <div class="input-items">
          <label>Tidsintervall</label>
          <select>
              <option value="">1 uker</option>
              <option value="">2 uker</option>
              <option value="">3 uker</option>
              <option value="">4 uker</option>
              <option value="">5 uker</option>
              <option value="">6 uker</option>
              <option value="">7 uker</option>
          </select>
        </div>
        <div class="input-items">
          <label>Startdato</label>
          <input 
          onchange="model.inputs.startDate = this.value" type="date" placeholder="Velg Stardato" required />
        </div>
        <div class="input-items">
          <label>Svarfrits</label>
          <select>
            <option value="">1 dager</option>
            <option value="">2 dager</option>
            <option value="">3 dager</option>
            <option value="">4 dager</option>
            <option value="">5 dager</option>
            <option value="">6 dager</option>
            <option value="">7 dager</option>
          </select>
        </div>
      </div>

      <label>Send varsel</label>
      <div>
        <input
        onchange="model.inputs.groupNew.newNotification = this.checked" type="checkbox" id="notification1" ${model.inputs.groupNew.newNotification ? 'checked' : ''}/>
        <label for="notification1">Ved ny undersøkelse</label>
      </div>
      <div>
        <input
        onchange="model.inputs.groupNew.reminderNotification = this.checked" type="checkbox" id="notification2" ${model.inputs.groupNew.reminderNotification ? 'checked' : ''}/>
        <label for="notification2">Dagen før svarfrist</label>
      </div>
    </div>
    <div class="left">
      <button>Fullfør gruppen</button>
      <div class="flex-right">
        <div class="flex-down">
          <label>Managerliste</label>
          <div>
            <select id="managerSelect">
            ${managerOptionsHTML(true)}
            </select>
            <button onclick="addManagerToList()">+</button>
          </div>
          <ul>
            ${managerListHTML()}
          </ul>
        </div>

        <div class="flex-down">
          <label>Deltakerliste</label>
          <div>
            <select id="userSelect">
            ${userOptionsHTML()}
            </select>
            <button onclick="addUserToList()">+</button>
          </div>
          <ul>
            ${userListHTML()}
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
}

//



function userListHTML() {
  let listHTML = '';
  for (const userId of model.inputs.groupNew.userIds) {
    let user = getUserFromID(userId);
    if(user == null) continue;
    const userName = `${user.firstName} ${user.lastName}`
    listHTML += `<li><div>${userName} <button onclick="alert(${user.id}s">Delete</button></div></li>`
  }
  return listHTML;
}


function managerListHTML() {
  let listHTML = '';
  for (const managerId of model.inputs.groupNew.managerIds) {
    let manager = getUserFromID(managerId);
    if(manager == null) continue;
    const userName = `${manager.firstName} ${manager.lastName}`
    listHTML += `<li><div>${userName} <button onclick="alert(${manager.id}s">Delete</button></div></li>`
  }
  return listHTML;
}

function userOptionsHTML() {
  let optionsHTML = "";
  for (const user of getOptionUsers()) {
      optionsHTML += `<option value="${user.id}">${user.firstName} ${user.lastName}</option>`;
  }
  return optionsHTML;
}


function managerOptionsHTML() {
  let optionsHTML = "";
  for (const manager of getOptionManagers()) {
      optionsHTML += `<option value="${manager.id}">${manager.firstName} ${manager.lastName}</option>`;
  }
  return optionsHTML;
}
