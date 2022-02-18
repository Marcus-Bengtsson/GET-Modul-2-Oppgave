function updateSurveyPageView() {
  const surveyPage = model.inputs.surveyPage;
  const template = model.data.templates[0];
  if(surveyPage.surveyId == null) setupSurvey();
  surveyPage.lastPageNumber = template.pages.length;
  surveyPage.title = getSurveyTitle();
 
  const navigationButtons = {
    nextButton: `<button onclick="nextPage()">Neste</button>`,
    finishButton: `<button onclick="handleSurveyFinished()">Fullfør</button>`,
    previousButton: `<button onclick="previousPage()">Forrige</button>`,
    cancelButton: `<button onclick="redirectToPage('Dashboard')">Avbryt</button>`,
  }

  let questionList = generateQuestions(template.pages[surveyPage.pageNumber-1].questions);
  
  const surveyViewInputs = {
    header: {
      title: surveyPage.title,
      subTitle: `Side ${surveyPage.pageNumber} av ${surveyPage.lastPageNumber}`,
      headerTitle: template.pages[surveyPage.pageNumber-1].title,
    },
    comments: {
        labelText: 'Kommentar',
        value: surveyPage.commentText,
        onChange: 'model.inputs.surveyPage.commentText = this.value',
        columns: 20,
        rows: 10, 
    },
    anonymousInput: {
      labelText: 'Anonym kommentar',
      onChange: 'model.inputs.surveyPage.commentIsAnonymous = this.checked',
      isChecked: surveyPage.commentIsAnonymous,
    }
  };

  const commentSection = `
    ${textAreaWithLabelHTML(surveyViewInputs.comments)}
    ${inputCheckboxWithLabelHTML(surveyViewInputs.anonymousInput)}
  `
  console.log(model.inputs.surveyPage.answers);
  return /*html*/ `
  <div class="survey-page">
  <section>
    <header>
      ${surveyHeader(surveyViewInputs.header)}
    </header>
      <ul class="survey-questions">
        ${questionsToHTML(questionList)}
        <li>${isLastPage() ?  commentSection : ''}</li>
      </ul>
    </section>
    <div class="survey-buttons">
      ${isFirstPage() ? navigationButtons.cancelButton : navigationButtons.previousButton}
      ${isLastPage() ? navigationButtons.finishButton : navigationButtons.nextButton}
    </div>
  </div>
  `;
}

function questionsToHTML(questionList) {
  let html = "";
  for (const question of questionList) {
    html += surveyQuestionCardHTML(question);
  }
  return html;
}

function generateQuestions(questionArray) {
  let input = [];
  for (let i = 0; i < questionArray.length; i++) {
    const question = parseQuestion(questionArray[i]);
    input.push({
      questionText: question.text,
      onChange: `setAnswerValue(${question.number}, parseInt(this.value, 10))`, // setAnswerValue() `
      radioName: `answer${i}`,
      checkedRadio: `${model.inputs.surveyPage.answers[question.number-1]}`,
    });
  }
  return input;
}