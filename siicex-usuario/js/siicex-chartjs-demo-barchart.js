$(function () {

    /* Gráfico de barras */
    var ctx = document.getElementById('barChart'); 
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
});

});