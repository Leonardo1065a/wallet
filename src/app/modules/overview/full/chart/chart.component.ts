import { Component } from '@angular/core';
import { styleGuide } from 'assets/style-guide-settings';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  color = styleGuide.colors?.theme?.highlight || '#bb2d3b';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [0, 20, 18, 22, 33, 48, 45, 50, 38, 43, 55, 70],
        label: 'Markets',
        fill: false,
        tension: 0.1,
        borderColor: this.color,
        backgroundColor: this.color
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;
}
