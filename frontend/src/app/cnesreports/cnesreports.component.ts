import { Component, OnInit } from '@angular/core';
import { CnesListService } from 'app/cneslist/cneslist.service';
import { CnesStateService } from 'app/cnesstate/cnesstate.service';
import { CnesTypesService } from 'app/cnestipos/cnestypes.service';
import { CnesState } from 'app/cnesstate/cnesstate.model';
import { Chart } from 'chart.js'
import { CnesTypes } from 'app/cnestipos/cnestypes.model';

@Component({
  selector: 'mv-cnesreports',
  templateUrl: './cnesreports.component.html',
  styleUrls: ['./cnesreports.component.css']
})
export class CnesreportsComponent implements OnInit {

  cnesState : CnesState
  cnesTypes : CnesTypes
  chartBar = []  
  chartPie = []  
  cnesTotalCount: number

  constructor(private cnesListService: CnesListService,
              private cnesStateService: CnesStateService,
              private cnesTypesService: CnesTypesService) { }

  ngOnInit() {
    this.cnesListService.getTotalCount().subscribe(res => this.cnesTotalCount = res['value'])

    this.cnesStateService.getQtdStates(this.cnesState)
    .subscribe(res => {        
      let sizeObj = Object.keys(res).length
      let labelState = []
      let valueState = []
      let color = []    
      for (let index = 0; index < sizeObj; index++) {
        labelState.push(res[index]._id)
        valueState.push(parseFloat(res[index].count).toFixed(0))
        color.push('#104e70')
      }          
      this.fchartbar(labelState,valueState,color)      
    })    

    this.cnesTypesService.getQtdTypes(this.cnesTypes).subscribe(res => {      
      let sizeObj = Object.keys(res).length
      let labelState = []
      let valueState = []
      let color = []    
      for (let index = 0; index < sizeObj; index++) {
        labelState.push(res[index]._id)
        valueState.push(parseFloat(res[index].count).toFixed(0))        
      }          
      this.fchartPie(labelState,valueState)
    })

  }
  fchartPie(labelState: any[], valueState: any[]): any {
    this.chartPie = new Chart('canvas2',{
      type: 'pie',
      data: {
        labels: labelState,
        datasets: [{
          label: "Qtd",
          data: valueState,
          backgroundColor: ['#0055AB','#e1e1e1','#104e70' ,'#208c81'],
          borderWidth: 1
        }]
      },      
      options: {        
        title: {
          display: true,
          text: `Contagem Total de CNES:${this.cnesTotalCount}`      
        },
        scales: {
            xAxes: [{
              gridLines: {
                  display:false
                },                  
              stacked: false,
              display:false
            }],
            yAxes: [{              
              gridLines: {
                display:false
              },
                stacked: true,
                display:false
            }]
        }
      }
    })
  }

  fchartbar(labelState:any,valueState:any,color:any){
    this.chartBar = new Chart('canvas',{
      type: 'bar',
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
              backgourndColor: '#104e70',
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
