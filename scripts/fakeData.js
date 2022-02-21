import { nameList } from './nameList.js';
import { lastNameList } from './lastNameList.js'
const emailProviders = [ "coldmail", "duckmail", "quietmail"]
const emailTLD = ["hello", "404", "haha", "no"];
const numberArray = [...Array(10).keys()];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function randomElementFromArray(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function randomNumberString(min, max, numberList = numberArray) {
  let numbers = '';
  let randomNum = Math.floor(Math.random() * (max - min));
  for (let i = 0; i < Array.from({ length: randomNum }, (_, i) => i+1) + min; i++) {
    numbers += randomElementFromArray(numberList);
  }
  return numbers;
}

function getNewDate(date, days) {
  return  new Date(date).getTime() + (days * 86400000);
}


const fakeData = {
  name(nameArray = nameList) {
    return randomElementFromArray(nameArray);
  },
  lastName(lastNameArray = lastNameList) {
    return randomElementFromArray(lastNameArray);
  },
  username(minNumbers = 2, maxNumbers = 3) {
    return `${fakeData.name()}${randomNumberString(minNumbers, maxNumbers)}`;
  },
  password(username = fakeData.username(2, 4), minNumbers = 2, maxNumbers = 3) {
    return `${reverseString(username)}${randomNumberString(minNumbers, maxNumbers)}`;
  },
  email(tldList = emailTLD, providerList = emailProviders) {
    const TLD = randomElementFromArray(tldList);
    const provider = randomElementFromArray(providerList);
    const userName = fakeData.username();
    return `${userName}@${provider}.${TLD}`;
  },
  user(id, roleId, avatarId) {
    return {
      id,
      firstName: fakeData.name(),
      lastName: fakeData.lastName(),
      email: fakeData.email(),
      password: fakeData.password(),
      roleId,
      avatarId,
    }
  },
  users(firstId, roleId, amount) {

  },
  group({id, userIds, managerIds, intervals, startDate, deadline}) {
    return {
      id,
      name: `Gruppe ${groupId + 1}`,
      description: `Beskrivelse av en gruppe`,
      intervals,
      startDate,
      deadline,
      userIds,
      managerIds
    }
  },
  surveyAnswer(minScore, maxScore, totalAnswers = 1) {
    const surveyAnswer = {
      totalScores: [0, 0, 0, 0],
      averageScores: [0, 0, 0, 0]
    }
    for (let i = 0; i < totalAnswers; i++) {
      for (let j = 0; j < 4; j++) {
        surveyAnswer.totalScores[j] += generateNumber(minScore, maxScore);
        
      }
    }
    for (let i = 0; i < 4; i++) {
      surveyAnswer.averageScores[i] = Math.floor(surveyAnswer.totalScores[i] / totalAnswers);
    }
    return surveyAnswer;
  },
  survey(id, groupId, date, totalAnswers, isInterval = true) {
    const surveyAnswer = fakeData.surveyAnswer(8, 40, totalAnswers);
    return {
      id, 
      groupId,
      date,
      totalAnswers,
      totalScores: surveyAnswer.totalScores,
      stageNames: ['Forming', 'Storming', 'Norming', 'Performing'],
      averageScores: surveyAnswer.averageScores,
      isInterval,
    }
  },
  surveys(firstId, groupId, intervals, amount, startDate) {
    let surveys = [];
    let currentId = firstId;
    let currentDate = startDate;
    let days = 0;
    for (let i = 0; i < amount; i++) {
        days = i > 0 ? days + intervals : days;
        currentDate = i > 0 ? new Date(getNewDate(currentDate, days)).toISOString().split('T')[0] : currentDate;
        surveys.push(fakeData.survey(currentId, groupId, currentDate, 5));
        currentId++;
    }
    return surveys;
  }
}


const newSurveys = fakeData.surveys(3, 1, 14, 5, new Date().toISOString().split('T')[0]);
for (const survey of newSurveys) {
  model.data.surveys.push(survey);
}