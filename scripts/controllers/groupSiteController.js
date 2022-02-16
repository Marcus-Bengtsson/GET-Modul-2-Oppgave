function getNextSurveyDate(group) {
    let mostRecentSurvey = getMostRecentSurveyFromGroupId(group.id);
    let mostRecentSurveyTime = new Date(mostRecentSurvey.date).getTime();
    nextSurvey = new Date(mostRecentSurveyTime + (group.intervals * 86400000)).toDateString();
    return nextSurvey;
};

function generateDonutChart(survey) {
    let backgroundColors = [];
    for (stage of model.data.stageData) {
        backgroundColors.push(`rgb(${stage.color})`)
    }
    const donutChart = {
        type: 'doughnut',
        data: {
            labels: survey.stageNames,
            datasets: [{
                label: 'Donut',
                data: survey.averageScores,
                backgroundColor: backgroundColors,
                hoverOffset: 20,
            }],
        },
        options: {
            cutout: 90 | '%',
            radius: 100 | '%',
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: { size: 20, },
                    },
                    position:
                        'right',
                    title: {
                        color: 'white',
                        display: true,
                        text: 'Forrige undersøkelse',
                        font: {
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                            size: 17.5,
                        },
                    },
                },
            },
        },
        layout: {
            autoPadding: true,
        },
    };
    return donutChart;
}

function generateLineChart() {
    const lineChart = {
        type: 'line',
        data: {
            //labels: labels,
            datasets: generateGroupSiteLineChartData(),
        },
        options: {
            backgroundColor: 'white',
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: { size: 17, },
                    },

                },
            }
        }
    };
    return lineChart;
};

function generateGroupSiteLineChartData() {
    const surveyList = getSurveysFromGroupId(model.inputs.groupSite.groupId);
    let dataList = [[], [], [], [], [],];
    let datasets = [];
    for (const survey of surveyList) {
        const date = survey.date;
        for(let i = 0; i < 4; i++) {
            dataList[i].push({x: date, y: survey.averageScores[i]});
        };
    };
    for (let i = 0; i < 4; i++) {
        let stage = model.data.stageData[i];
        datasets.push({
            label: stage.id,
            data: dataList[i],
            fill: false,
            borderColor: `rgb(${stage.color})`,
            tension: 0.3,
        })
    }
    return datasets;
};