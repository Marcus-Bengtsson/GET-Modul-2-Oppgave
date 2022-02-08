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
let donutValues = [25, 15, 12, 5];
const labels = [
    'Forming',
    'Storming',
    'Performing',
    'Norming',
];
const donutChart = {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: 'Donut',
            data: donutValues,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(100, 150, 86)',
            ],
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
const lineChart = {
    type: 'line',
    data: {
        //labels: labels,
        datasets: [{
            label: 'Forming',
            data: [{ x: '2016.12.25', y: 25 }, { x: '2016.12.26', y: 12 }, { x: '2017.01.26', y: 5 }],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.3,
        },
        {
            label: 'Storming',
            data: [{ x: '2016.12.25', y: 2 }, { x: '2016.12.26', y: 15 }, { x: '2017.01.26', y: 12 }],
            fill: false,
            borderColor: 'rgb(255, 205, 86)',
            tension: 0.3,
        },
        {
            label: 'Performing',
            data: [{ x: '2016.12.25', y: 20 }, { x: '2016.12.26', y: 10 }, { x: '2017.01.26', y: 2 }],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
        },
        {
            label: 'Norming',
            data: [{ x: '2016.12.25', y: 30 }, { x: '2016.12.26', y: 8 }, { x: '2017.01.26', y: 20 }],
            fill: false,
            borderColor: 'rgb(100, 150, 86)',
            backgroundColor: 'white',
            tension: 0.3,
        },],
    },
    options: {
        backgroundColor: 'white',
        elements: {
            line: {

            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: { size: 14, },
                },

            },
        }
    }
};