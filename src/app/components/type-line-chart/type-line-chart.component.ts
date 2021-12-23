import { Component, ViewChild,OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-type-line-chart',
  templateUrl: './type-line-chart.component.html',
  styleUrls: ['./type-line-chart.component.scss']
})
export class TypeLineChartComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 64.1, 87.22, 106.9, 90, 12.2, 59.1, 120,82.99,40.2,8.1 ],
        label: 'Customer expences',
        
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 0.99, 0.59, 0.8, 1.25, 0.02, 1.01, 2.0,0.4,0.1,0.04 ],
        label: 'Cash Back',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(1,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      // {
      //   data: [ 180, 480, 770, 90, 1000, 270, 400 ],
      //   label: 'Series C',
      //   yAxisID: 'y-axis-1',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'red',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // }
    ],
    labels: [ "24 JUN 2019 ","25 JUN 2019","25 JUN 2019 ","2 JUL 2019 ","3 JUL 2019 ","3 JUL 2019 ","10 JUL 2019 ","11 JUL 2019 ","13 JUL 2019 ","15 JUL 2019 " ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    // scales: {
    //   // We use this empty structure as a placeholder for dynamic theming.
    //   x: {},
    //   'y-axis-0':
    //     {
    //       position: 'left',
    //     },
    //   'y-axis-1': {
    //     position: 'right',
    //     grid: {
    //       color: 'rgba(255,0,0,0.3)',
    //     },
    //     ticks: {
    //       color: 'red'
    //     }
    //   }
    // },

    // plugins: {
    //   legend: { display: true },
    //   annotation: {
    //     annotations: [
    //       {
    //         type: 'line',
    //         scaleID: 'x',
    //         value: 'March',
    //         borderColor: 'orange',
    //         borderWidth: 2,
    //         label: {
    //           position: 'center',
    //           enabled: true,
    //           color: 'orange',
    //           content: 'LineAnno',
    //           font: {
    //             weight: 'bold'
    //           }
    //         }
    //       },
    //     ],
    //   }
    // }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // public randomize(): void {
  //   for (let i = 0; i < this.lineChartData.datasets.length; i++) {
  //     for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
  //       this.lineChartData.datasets[i].data[j] = TypeLineChartComponent.generateNumber(i);
  //     }
  //   }
  //   this.chart?.update();
  // }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
