import { Component, ViewChild,OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-type-pie-chart',
  templateUrl: './type-pie-chart.component.html',
  styleUrls: ['./type-pie-chart.component.scss']
})
export class TypePieChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        maxHeight:100
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartLegend = true;
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'fuel','food', 'services','travel',"Cafe" ],
    datasets: [ {
      data: [ 300, 500, 100,200 ,355]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



  

  constructor() { }

  ngOnInit(): void {
  }

}
