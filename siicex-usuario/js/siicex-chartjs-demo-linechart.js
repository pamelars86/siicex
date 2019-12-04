$(function () {

    var lineData = {
        labels: ["2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018"],
        datasets: [
            {
                label: "Perú",           
                lineTension: 0,
                borderColor: '#7eba41',          
                fillColor: "#fff",
                strokeColor: "#fff",
                pointColor: "#fff",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                backgroundColor: 'transparent',
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [4000, 5000, 5100, 7000, 4900, 8000, 6300, 9000, 6000]
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