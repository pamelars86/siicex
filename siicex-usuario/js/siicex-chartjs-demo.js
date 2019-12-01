$(function () {

    /* Gráfico de barras */
  /*  var ctx = document.getElementById('barChart'); 
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2004', '2006', '2010', '2012', '2018'],
        xAxisID: 'Millones',
        yAxisID: 'Años',
        datasets: [{
            label: 'FOB',
            data: [8000, 5000, 8500, 2500, 9300 ],
            backgroundColor: [
                '#ff9d00',
                '#ff9d00',
                '#ff9d00',
                '#ff9d00',
                '#ff9d00'
            ],
            borderColor: [
                '#ff9d00',
                '#ff9d00',
                '#ff9d00',
                '#ff9d00',
                '#ff9d00'
            ],
            borderWidth: 1
        },{
            label: 'Volumen en Kg.',
            data: [6700, 7500, 4100, 2500, 9100],
            backgroundColor: [
                '#7eba41',
                '#7eba41',
                '#7eba41',
                '#7eba41',
                '#7eba41'
            ],
            borderColor: [
                '#7eba41',
                '#7eba41',
                '#7eba41',
                '#7eba41',
                '#7eba41'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});*/

var lineData = {
    labels: ["SEP", "OCT", "NOV", "DIC", "ENE", "FEB", "MAR", "ABR", "MAY"],
    datasets: [
        {
            label: "2017",           
            lineTension: 0,
            borderColor: '#d81e05',          
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            backgroundColor: 'transparent',
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 31, 60]
        },
        {
            label: "2018",        
            lineTension: 0,
            borderColor: '#7eba41',
            fillColor: "#7eba41",
            strokeColor: "#7eba41",
            pointColor: "rgba(26,179,148,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            backgroundColor: 'transparent',
            pointHighlightStroke: "rgba(26,179,148,1)",
            data: [28, 48, 40, 19, 86, 27, 90, 56, 70]
        }
    ]
};

var lineOptions = {
    scaleShowGridLines: true,
    lineTension: 0,           
    scaleGridLineColor: "#7eba41",
    scaleGridLineWidth: 1,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    responsive: true,
};


/* Gráfico de líneas*/
var ctxLine = document.getElementById('lineChart'); 
var myLineChart = new Chart(ctxLine, {
    type: 'line',
    data: lineData,
    options: lineOptions
});

});