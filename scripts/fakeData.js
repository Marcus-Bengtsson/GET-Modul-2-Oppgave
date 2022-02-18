import { nameList } from './nameList.js';
import { lastNameList } from './lastNameList'
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
  return min + Math.floor(Math.random() * max);
}

function randomNumberString(min, max, numberList = numberArray) {
  let numbers = '';
  let randomNum = Math.floor(Math.random() * (max - min));
  for (let i = 0; i < Array.from({ length: randomNum }, (_, i) => i+1) + min; i++) {
    numbers += randomElementFromArray(numberList);
  }
  return numbers;
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
  user(userId, roleId) {
    const newUser = {
      id: userId,
      firstName: fakeData.name(),
      lastName: fakeData.lastName(),
      email: fakeData.email(),
      password: fakeData.password(),
      roleId: roleId,
      avatarId: generateNumber(0, 4)
    }
  }
}