function updateGroupNewView() {
  const inputObjects = {
    name: {
      labelText: 'Gruppenavn',
      value: model.inputs.groupNew.name,
      onChange: 'model.inputs.groupNew.name = this.value',
      placeholderText: 'Skriv gruppenavn..',
      isRequired: true,
    },
    newNotification: {
      labelText: 'Ved ny undersøkelse',
      onChange: 'model.inputs.groupNew.newNotification = this.checked',
      isChecked: model.inputs.groupNew.newNotification,
    },
    reminderNotification:{
      labelText: 'Dagen før svarfrist',
      onChange: 'model.inputs.groupNew.reminderNotification = this.checked',
      isChecked: model.inputs.groupNew.reminderNotification,
    }, 
    description: {
      labelText: 'Beskrivelse av gruppen',
      value: model.inputs.groupNew.description,
      onChange: 'model.inputs.groupNew.description = this.value',
      columns: 45,
      rows: 10,
    },
    //addManagerToList()
    managerDropdown: {
      labelText: 'Managerliste',
      onChange: 'model.inputs.groupNew.managerDropdown = this.value',
      value: model.inputs.groupNew.managerDropdown,
      content: generateUserOptionList(getUsersFromRoleId(1)),
      buttonOnClick: "addManagerToList()",
      buttonText: "+",
    },
    //addUserToList()
    userDropdown: {
      labelText: 'Brukerliste',
      onChange: 'model.inputs.groupNew.userDropdown = this.value',
      value: model.inputs.groupNew.userDropdown,
      content: generateUserOptionList(model.data.users),
      buttonOnClick: "addUserToList()",
      buttonText: "+",
    },
  }
  return /*html*/ `

    <div class="group-new">
      <section>
      <form onsubmit="return false">
          <h1>Ny gruppe</h1>
          ${inputTextWithLabelHTML(inputObjects.name)}
          ${checkConfirmName()}
          ${textAreaWithLabelHTML(inputObjects.description)}
          <div>
            <label>Varsler</label>
            ${inputCheckboxWithLabelHTML(inputObjects.newNotification)}
            ${inputCheckboxWithLabelHTML(inputObjects.reminderNotification)}
          </div>
      </form>
      </section>
      <section class="section-2">
        <div>
          ${selectWithLabelHTML(inputObjects.managerDropdown)}
          <ul>
            ${generateUserList(model.inputs.groupNew.managerIds)}
          </ul>
        </div>
        <div>
          ${selectWithLabelHTML(inputObjects.userDropdown)}
          <ul>
          ${generateUserList(model.inputs.groupNew.userIds)}
        </ul>
        </div>
      </section>
    </form>

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