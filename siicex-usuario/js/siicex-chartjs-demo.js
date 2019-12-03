$(function () {

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
            data: [19000, 18950, 19100, 18920, 19100, 19050, 19150, 19170, 19000]
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
            data: [18900, 19000, 19050, 19124, 19000, 19300, 19150, 19400, 19100]
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