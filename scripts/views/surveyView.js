function updateSurveyPageView() {
  const surveyInput = model.inputs.surveyPage;
  if (surveyInput.surveyId == null) {
    setupEmptySurvey();
  }
  
  const surveyTemplate = model.data.templates[0];
  surveyInput.lastPageNumber = surveyTemplate.pages.length;
  surveyInput.title = getSurveyTitle(getCurrentSurvey());

  const componentInputs = {
    header: {
      title: surveyInput.title,
      subTitle: `Side ${surveyInput.pageNumber} av ${surveyInput.lastPageNumber}`,
    },
    comments: {
      labelText: 'Kommentar',
      value: surveyInput.commentText,
      onChange: 'updateSurveyInputComment(this.value)',
      columns: 20,
      rows: 10,
    },
    anonymousInput: {
      labelText: 'Anonym kommentar',
      onChange: 'updateSurveyInputAnonymousInput(this.checked)',
      isChecked: surveyInput.commentIsAnonymous,
    }
  };

  const pageElements = getPageElements(componentInputs);
  let pageQuestions = surveyTemplate.pages[surveyInput.pageNumber - 1].questions;

  return /*html*/ `
  <div class="survey-page">
  <section>
    <header>
      ${surveyHeader(componentInputs.header)}
    </header>
      <ul class="survey-questions">
        ${questionsToHTML(pageQuestions)}
        <li>${pageElements.commentSection}</li>
      </ul>
    </section>
    <div class="survey-buttons">
      ${pageElements.footerLeftButton}
      ${pageElements.footerRightButton}
    </div>
  </div>
  `;
}

function getPageElements(surveyViewInputs) {
  const commentSection = isLastSurveyPage() ? `${textAreaWithLabelHTML(surveyViewInputs.comments)}
  ${inputCheckboxWithLabelHTML(surveyViewInputs.anonymousInput)}` : '';
  
  const footerLeftButton = isFirstSurveyPage() ? `<button onclick="redirectToPage('Dashboard')">Avbryt</button>` :
    `<button onclick="previousSurveyPage()">Forrige</button>`;
  const footerRightButton = isLastSurveyPage() ? `<button onclick="handleSurveyFinished()">Fullfør</button>` 
  : `<button onclick="nextSurveyPage()">Neste</button>`;
  return {
    footerLeftButton,
    footerRightButton,
    commentSection
  }
}

function questionsToHTML(questionArray) {
  let html = "";
  for (let i = 0; i < questionArray.length; i++) {
    const question = parseQuestion(questionArray[i]);
    html += surveyQuestionCardHTML({
      questionText: question.text,
      onChange: `setAnswerValue(${question.number}, Number(this.value))`,
      radioName: `answer${i}`,
      checkedRadio: `${getAnswerValue(question.number)}`,
    })
  }
  return html;
}