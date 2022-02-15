function updateSurveyPageView() {
  const surveyPage = model.inputs.surveyPage;
  const template = model.data.templates[0];
  surveyPage.lastPageNumber = template.pages.length;
  
  const navigationButtons = {
    nextButton: `<button onclick="nextPage()">Neste</button>`,
    finishButton: `<button>Fullfør</button>`,
    previousButton: `<button onclick="previousPage()">Forrige</button>`,
    cancelButton: `<button onclick="redirectToPage('Dashboard')">Avbryt</button>`,
  }

  let questionList = generateQuestions(template.pages[surveyPage.pageNumber-1].questions);
  
  const surveyViewInputs = {
    header: {
      title: "Survey week 1",
      subTitle: `part ${surveyPage.pageNumber} of ${surveyPage.lastPageNumber}`,
      headerTitle: template.pages[surveyPage.pageNumber-1].title,
    },
    comments: {
        labelText: 'Kommentar',
        value: surveyPage.commentText,
        onChange: 'model.inputs.surveyPage.commentText = this.value',
        columns: 20,
        rows: 10, 
    },
  };

  return /*html*/ `
  <div>
  <section>
    <header>
      ${surveyHeader(surveyViewInputs.header)}
    </header>
      <ul class="survey-questions">
        ${questionsToHTML(questionList)}
        <li>${isLastPage() ? textAreaWithLabelHTML(surveyViewInputs.comments) : ''}</li>
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