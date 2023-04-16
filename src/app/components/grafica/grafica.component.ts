import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType} from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})

export class GraficaComponent {
@Input() public title: string =  'Sin titulo' ;

@Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
@Input('data') doughnutChartData: ChartData<'doughnut'>  = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] },
       
      ]
    };
  public doughnutChartType: ChartType = 'doughnut';

}
