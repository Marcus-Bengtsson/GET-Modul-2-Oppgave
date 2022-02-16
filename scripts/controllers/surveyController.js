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
  if(surveyPage.answers.length == 0) setupSurvey();
  if (surveyPage.pageNumber === 1) {
    return true;
  }
  return false;
}

function isLastPage() {
  const surveyPage = model.inputs.surveyPage;
  if (surveyPage.pageNumber == surveyPage.lastPageNumber) {
    return true;
  }
  return false;
}

function setupSurvey() {
  const surveyPage = model.inputs.surveyPage;
  if (surveyPage.surveyId != null) {
    return;
  }
  CreateSurvey(1);
  surveyPage.answers = new Array(32).fill(2, 0);
}

// setAnswerValue(questionNumber, value)
function setAnswerValue(questionNumber, value) {
  const surveyPage = model.inputs.surveyPage;
  surveyPage.answers[questionNumber - 1] = value;
}

function parseQuestion(question) {
  // example of question "32: We get a lot of work done." 
  let splitQuestionArray = question.split(':');
  // returns ["32", "We get a lot of work done."]
  let questionNumber = parseInt(splitQuestionArray[0], 10);
  // returns 32 as int

  if (questionNumber === NaN) {
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
      pageCalculation.questionIndexList.push(questionNumber - 1);
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

function CreateSurvey(groupId) {
  const surveys = model.data.surveys;
  let newId = getHighestIdFromArrayObj(surveys) + 1;
  let currentDate = new Date().toISOString().split('T')[0];
  surveys.push({
    id: newId,
    groupId: groupId,
    date: currentDate,
    totalAnswers: 0,
    totalScores: [],
    stageNames: [],
    averageScores: [],
  })
  model.inputs.surveyPage.surveyId = newId;
}

function updateAverageScores(survey) {
  for (let i = 0; i < survey.averageScores.length; i++) {
    survey.averageScores[i] = survey.totalScores[i] / survey.totalAnswers;
  }
}

function addValuesToArray(array, newValues) {
  for (let i = 0; i < newValues.length; i++) {
    if(array[i] == null) {
      array[i] = newValues[i];
      continue;
    }
    array[i] += newValues[i];
  }
  return array;
}

function handleSurveyFinished() {
  const surveyPage = model.inputs.surveyPage;
  
  if(!checkAllAnswersAnswered()) {
    return; 
  }
  
  let indexTemplate = parseTemplateForCalculation(model.data.templates[0]);
  let calculatedTotalScore = CalculateTotalScore(indexTemplate, surveyPage.answers);
  
  let survey = getObjFromID(surveyPage.surveyId, model.data.surveys);
  
  survey.totalScores = addValuesToArray(survey.totalScores, calculatedTotalScore.totalScores)
  survey.stageNames = addValuesToArray(survey.stageNames, calculatedTotalScore.stageNames);
  survey.totalAnswers += 1;
  
  updateAverageScores(survey);
  
  resetSurveyInputs();
  
  redirectToPage('Dashboard');
}

function checkAllAnswersAnswered() {
  return !model.inputs.surveyPage.answers.includes(0);
}

function resetSurveyInputs() {
  model.inputs.surveyPage = {
    surveyId: null,
    lastPageNumber: 4,
    pageNumber: 1,
    answers: [],
    commentText: '',
    commentIsAnonymous: false,
    confirmSubmission: false,
  }
}

//TODO: Kommentar lagres med handleSurveyFinished()