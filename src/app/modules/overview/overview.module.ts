import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './full/chart/chart.component';
import { FullComponent } from './full/full.component';
import { OverviewComponent } from './overview.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [OverviewComponent, SideComponent, FullComponent, ChartComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OverviewComponent
      }
    ])
  ]
})
export class OverviewModule {}
