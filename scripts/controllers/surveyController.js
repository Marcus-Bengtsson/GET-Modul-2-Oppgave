function nextPage() {
  const surveyPage = model.inputs.surveyPage;
    surveyPage.pageNumber += 1;
    updateMainView();
} 

function previousPage() {
  const surveyPage = model.inputs.surveyPage;
    surveyPage.pageNumber -= 1;
    updateMainView();
} 

function isFirstPage() {
  const surveyPage = model.inputs.surveyPage;
  if(surveyPage.pageNumber === 1) {
    return true;
  }
  return false;
}

function isLastPage() {
  const surveyPage = model.inputs.surveyPage;
  if(surveyPage.pageNumber == surveyPage.lastPageNumber) {
    return true;
  }
  return false;
}

function setupSurvey() {
  const surveyPage = model.inputs.surveyPage;
  if(surveyPage.surveyId != null) {
    return;
  }
  surveyPage.answers = new Array(32).fill(0);
}

// setAnswerValue(questionNumber, value)
function setAnswerValue(questionNumber, value) {
    const surveyPage = model.inputs.surveyPage;
    surveyPage.answers[questionNumber-1] = value;
}

function parseQuestion(question) {
  // example of question "32: We get a lot of work done." 
  let splitQuestionArray = question.split(':');
  // returns ["32", "We get a lot of work done."]
  let questionNumber = parseInt(splitQuestionArray[0], 10);
  // returns 32 as int

  if(questionNumber === NaN) {
    return null;
  }

  return {
    number: questionNumber,
    text: splitQuestionArray[1]
  }
}




function parseTemplateForCalculation(template) {
  const calculationOutput = {
    pages: []
  }
  // Go through the pages that are in template (input)
  for (const page of template.pages) {
    const pageCalculation = {
      title: page.title,
      questionIndexList: [],
    }

    for (const question of page.questions) {
      let splitQuestionArray = question.split(':');
      let questionNumber = parseInt(splitQuestionArray[0], 10);
      pageCalculation.questionIndexList.push(questionNumber-1);
    }
    calculationOutput.pages.push(pageCalculation);
  }
  return calculationOutput;
}

function CalculateTotalScore(calculationInput, surveyAnswers = []) {
  const output = {
    totalScores: [],
    stageNames: [],
  }
  for (const page of calculationInput.pages) {
    let totalPageScore = 0;
    for (const questionIndex of page.questionIndexList) {
      totalPageScore += surveyAnswers[questionIndex];
    }
    output.totalScores.push(totalPageScore);
    output.stageNames.push(page.title);
  }
  return output;
}

// TODO:
  // functions to create:
    // CheckAllAnswersAnswered
    // CreateSurvey
    // handleSurveyFinished
    // resetSurveyInputs