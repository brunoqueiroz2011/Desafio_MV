import { Chart } from 'chart.js'

export class CnesChartjs{
    constructor(){}

    chartBar(idChart:string,type:string, labelState:any,valueState:any,color:any){
        console.log("Chegou")
        return new Chart(idChart,{
            type: type,
            data: {
              labels: labelState,
              datasets: [{
                label: "Qtd",
                data: valueState,
                backgroundColor: color,            
                borderWidth: 1
              }]
            },
            options: {
              legends:{
                display:false
              },
              scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                      },                  
                    stacked: false,
                  }],
                  yAxes: [{                    
                    gridLines: {
                      display:false
                    },
                      stacked: true,
                      display:true
                  }]
              }
            }
          }) 
    }
}