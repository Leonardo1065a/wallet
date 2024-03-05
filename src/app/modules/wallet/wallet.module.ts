import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';
import { WalletComponent } from './wallet.component';

@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    CalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: WalletComponent
      }
    ])
  ]
})
export class WalletModule {}
