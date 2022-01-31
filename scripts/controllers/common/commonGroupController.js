// All common group controllers

/**
 * @description Returns an array of all the groups the user has access to, 
 * either as participant or manager
 */
function getGroupsFromUserID(userId, managerAccess) {
  let groupList = [];
  for (const group of model.data.groups) {
    let accessArray = managerAccess ? group.managerIds : group.userIds;
    if (accessArray.includes(userId)) {
      groupList.push(group);
    }
  }
  return groupList;
}

function getSurveysFromGroupId(groupId) {
  let surveyList = [];
  for(const survey of model.data.surveys) {
    if(survey.groupId === groupId) {
      surveyList.push(survey);
    }
  }
  return surveyList;
}