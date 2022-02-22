function generateComparisonLineCharts() {
    let stageIndex = 0;
  for (stage of model.data.stageData) {
    new Chart(
      `group-comparison-${stage.id}-lineChart`,
      generateComparisonLineChartObject(stage, stageIndex));
      stageIndex++;
  }
}



function generateComparisonLineChartObject(stage, stageIndex) {
    const lineChart = {
        type: "line",
        data: {
          datasets: generateComparisonLineChartData(stage, stageIndex),
        },
        options: {
          backgroundColor: "white",
          scales: {},
          scales: {
            x: {
              ticks: {
                color: "dark grey",
              },
              grid: {
                color: "dark grey",
              },
            },
            y: {
              ticks: {
                color: "dark grey",
              },
              grid: {
                color: "dark grey",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "dark grey",
                font: { size: 17 },
              },
            },
          },
        },
      };
      return lineChart;
}

function generateComparisonLineChartData(stage, stageIndex) {
    const selectedGroups = [];
    const dataList = [];
    for (groupId of model.inputs.groupComparison.groupIds) {
        selectedGroups.push(getGroupFromGroupId(groupId))
    }
    console.log(selectedGroups)
    for (group of selectedGroups) {
        const surveyList = getSurveysFromGroupId(group.id);
        for (const survey of surveyList) {
            const date = survey.date;
                dataList.push({ x: date, y: survey.averageScores[stageIndex] });
          }
    }
  let dataset = [];
      dataset.push({
      label: stage.id,
      data: dataList,
      fill: false,
      borderColor: `rgb(${stage.color})`,
      tension: 0.3,
    });
  return dataset;
}