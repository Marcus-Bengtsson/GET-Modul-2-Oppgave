function updateSurveyPageView() {
  let questionList = generateQuestions(tuckmanQuestions.stormingQuestions);
  const surveyPage = model.inputs.surveyPage;
  const surveyViewInputs = {
    header: {
      title: "Survey week 1",
      subTitle: "part 1 of 5",
      headerTitle: "Storming",
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
        <li>${textAreaWithLabelHTML(surveyViewInputs.comments)}</li>
      </ul>
    </section>
    <div class="survey-buttons">
      <button>Tilbake</button>
      <button>Neste</button>
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
    const question = questionArray[i];
    input.push({
      questionText: question,
      onChange: "console.log(this)",
      radioName: `answer${i}`,
      checkedRadio: 1,
    });
  }
  return input;
}
