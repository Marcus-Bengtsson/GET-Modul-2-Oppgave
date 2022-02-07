// surveyQuestionCardHTML
function surveyQuestionCardHTML(inputObj) {
  return /*html*/ `
    <li>
    <article class="survey-question">
      <p class="survey-text">${inputObj.questionText}</p>
      <fieldset 
        id="${inputObj.fieldSetId}" 
        class="survey-fields"
        onchange="${inputObj.onChange}" 
        value="${inputObj.value}">
        <input for="${inputObj.fieldSetId}" type="radio" name="${inputObj.radioName}" value="1">
        <input for="${inputObj.fieldSetId}" type="radio" name="${inputObj.radioName}" value="2">
        <input for="${inputObj.fieldSetId}" type="radio" name="${inputObj.radioName}" value="3">
        <input for="${inputObj.fieldSetId}" type="radio" name="${inputObj.radioName}" value="4">
        <input for="${inputObj.fieldSetId}" type="radio" name="${inputObj.radioName}" value="5">
      </fieldset>
    </article>
  </li>
    `;
}

// onchange value

function surveyHeader(inputObj) {
  return /*html*/ `
  <h1>${inputObj.title}</h1>
  <h2>${inputObj.subTitle}</h2>
  <section>
    <header class="survey-header">
      <h3>${inputObj.headerTitle}</h3>
      <div class="description-titles">
        <h4 class="answerOne">Nesten aldri</h4>
        <h4 class="answerTwo">Sjeldent</h4>
        <h4 class="answerThree">Noen ganger</h4>
        <h4 class="answerFour">Ofte</h4>
        <h4 class="answerFive">Nesten alltid</h4>
      </div>
    </header>`;
}
