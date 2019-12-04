$(function () {

    /* Gráfico de barras */
    var ctx = document.getElementById('barChartHorizontal'); 
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ["2017", "2018"],
          datasets: [
            {
              label: "Número de partidas",
              backgroundColor: ["#7eba41", "#ffc511"],
              data: [12,9],
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Número de partidas'
          },
          scales: {
              xAxes: [{
                gridLines: {
                    display:false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                display: false,
                  ticks: {
                    beginAtZero:true,
                  }
              }],
              yAxes: [{
                gridLines: {
                    display:false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                stacked: true
              }]
          }
        }
    });


    var ctx = document.getElementById('barChartHorizontal2'); 
    var myChart2 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ["2017", "2018"],
          datasets: [
            {
              label: "Número de partidas",
              backgroundColor: ["#7eba41", "#ffc511"],
              data: [17,9]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Número de partidas'
          },
          scales: {
              xAxes: [{
                gridLines: {
                    display:false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                  display: false,
                  ticks: {
                    beginAtZero:true,
                  }
              }],
              yAxes: [{
                gridLines: {
                    display:false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                  stacked: true,
              }]
          }
        }
    });

    var ctx = document.getElementById('barChartStackedHorizontal'); 
    var barOptions_stacked = {
        tooltips: {
            enabled: true
        },
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                    beginAtZero:true,
                    fontSize:11
                },
                scaleLabel:{
                    display:false
                },
                gridLines: {
                    display:false,
                }, 
                stacked: true
            }],
            yAxes: [{
                display: false,
                gridLines: {
                    display:false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize:11
                },
                stacked: true
            }]
        },

        legend: {
            position: "bottom",
            align: "middle"
        }
    };
    

    var ctx = document.getElementById("barChartStackedHorizontal");
    var myChart3 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["% Participación"],
           
            datasets: [{
                data: [55],
                label: "Estados Unidos",
                backgroundColor: "#7eba41",
            },{
                data: [25],
                label: "Chile",
                backgroundColor: "#92ce56",
            },{
                data: [5],
                label: "Bolivia",
                backgroundColor: "#ff9d00",
            },{
                data: [4],
                label: "Colombia",
                backgroundColor: "#ffc511",
            },{
                data: [12],
                label: "Otros",
                backgroundColor: "#f7d467",
            }]

        },
    
        options: barOptions_stacked,
    });


});
