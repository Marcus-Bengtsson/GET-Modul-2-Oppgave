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