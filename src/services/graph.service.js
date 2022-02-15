import { utilService } from "./util.service"

export const graphService = {
    getChartData,
    getDataSet,
}

function getChartData(type, dates) {
    let array

    if (dates.data) {
        array = dates.data.map(obj => {
            return utilService.fixTimestampChart(obj.x)
        })
    } else {
        array = dates.map(obj => {
            return utilService.fixTimestampChart(obj)
        })

    }
    return {
        type,
        data: {
            labels: array,
            datasets: []
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            lineTension: 1,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false,
                            padding: 25
                        }
                    }
                ]
            }
        }
    };
}

function getDataSet(label, data, backgroundColor, borderColor) {
    const array = data.map(obj => {
        return obj.y
    })
    const dataSet = {
        label,
        data: array,
        type: 'line',
        backgroundColor: backgroundColor,
        borderColor,
        color: borderColor,
        borderWidth: 2
    }
    return dataSet
}