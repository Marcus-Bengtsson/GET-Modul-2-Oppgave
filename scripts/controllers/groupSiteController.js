/*
to do:
    overskrift (gruppenavn)
    opprettet dato for gruppe
    Knapper
    Informasjonsbokser
    Deltakerliste
    doughnutdiagram
    Linjediagram
*/

//nyligste undersøkelse
//dagens dato
//tidsintervall
function getNextSurveyDate(group) {
    let mostRecentSurvey = getMostRecentSurveyFromGroupId(group.id);
    console.log(mostRecentSurvey)
    let mostRecentSurveyTime = new Date(mostRecentSurvey.date).getTime();
    console.log(mostRecentSurveyTime)
    nextSurvey = new Date(mostRecentSurveyTime + (group.intervals * 86400000)).toDateString();
    console.log(nextSurvey)
    return nextSurvey;
}