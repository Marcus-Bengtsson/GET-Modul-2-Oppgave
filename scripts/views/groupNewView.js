function updateGroupNewView() {
  return /*html*/ `
  <div class="group-new">
    <div class="right">
      <h1>Ny Gruppe</h1>
      <div class="input-items">
        <label>Lag ny gruppe</label>
        <input 
          onchange="model.inputs.groupNew.name = this.value"
          value="${model.inputs.groupNew.name}"
          type="text"
          placeholder="Skriv gruppenavn.." 
          required />
          ${checkConfirmName()}
      </div>
      <div class="input-items">
        <label>Beskrivelse av gruppen</label>
        <textarea
        onchange="model.inputs.groupNew.description = this.value" cols="30" rows="10">${model.inputs.groupNew.description}</textarea>
      </div>
      <div>
        <div class="input-items">
          <label>Tidsintervall (dager)</label>
          <input
            value="${model.inputs.groupNew.timeInterval}"
            onchange="model.inputs.groupNew.timeInterval = parseInt(this.value)"
            type="number" 
            required/>
        </div>
        <div class="input-items">
          <label>Startdato</label>
          <input
            value="${model.inputs.groupNew.startDate}"
            onchange="model.inputs.groupNew.startDate = this.value"
            
            type="date" 
            placeholder="Velg Stardato" required />
        </div>
        <div class="input-items">
          <label>Svarfrist (dager)</label>
          <input
          value="${model.inputs.groupNew.deadline}"
          onchange="model.inputs.groupNew.deadline = parseInt(this.value)"
          type="number"  required />
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
      <button onclick="createGroupFromInputs()">Fullfør gruppen</button>
      <div class="flex-right">
        <div class="flex-down">
          <label>Managerliste</label>
          <div>
            <select id="managerSelect">
            ${generateUserOptionList(getUsersFromRoleId(1))}
            </select>
            <button onclick="addManagerToList()">+</button>
          </div>
          <ul>
            ${generateUserList(model.inputs.groupNew.managerIds)}
          </ul>
        </div>

        <div class="flex-down">
          <label>Deltakerliste</label>
          <div>
            <select id="userSelect">
            ${generateUserOptionList(model.data.users)}
            </select>
            <button onclick="addUserToList()">+</button>
          </div>
          <ul>
            ${generateUserList(model.inputs.groupNew.userIds)}
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
}


function generateUserList(userIdList) {
  let optionList = ''
  for (const userId of userIdList) {
    const user = getUserFromID(userId);
    optionList += /*html*/`
      <li class="user-list-item">
        <div class="user-list">
          <p>${user.firstName} ${user.lastName}</p>
          <button onclick="removeUserFromList(${user.id})">X</button>
        </div>
      </li>`
  }
  return optionList;
}

function generateUserOptionList(userList) {
  let optionList = ''
  for (const user of userList) {
    optionList += /*html*/`
      <option value="${user.id}">
      ${user.firstName} ${user.lastName}
      </option>`
  }
  return optionList;
}

function checkConfirmName() {
  const isCorrect = model.inputs.groupNew.confirmName;
  if (isCorrect === false) {
    return '<p style="color: red;">Gruppenavn er opptatt</p>'
  }
  return '';
}