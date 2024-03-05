import { Component } from '@angular/core';
import { Calendar } from './calendar/calendar.component';

@Component({
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  _calendar = new Calendar({
    currentDate: new Date(),
    headers: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    title: 'Event',
    showPeriodBeforeAndAfter: true
  });

  constructor() {
    setTimeout(() => {
      this._calendar = {
        ...this._calendar,
        data: [
          { day: '2024-03-09', data: { value: 'R$ 1.964.768,00', class: 'down' } },
          { day: '2024-03-09', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-03-15', data: { value: 'R$ 1.964.768,00', class: 'down' } },
          { day: '2024-03-15', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-03-21', data: { value: 'R$ 1.964.768,00', class: 'down' } },
          { day: '2024-03-21', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-03-30', data: { value: 'R$ 1.964.768,00', class: 'down' } },
          { day: '2024-03-30', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-02-28', data: { value: 'R$ 335.696.673,00', class: 'down' } },
          { day: '2024-02-28', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-04-03', data: { value: 'R$ 335.696.673,00', class: 'down' } },
          { day: '2024-04-03', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-03-12', data: { value: 'R$ 335.696.673,00', class: 'up' } },
          { day: '2024-03-05', data: { value: 'R$ 335.696.673,00', class: 'down' } },
          { day: '2024-03-04', data: { value: 'R$ 411.911,00', class: 'down' } },
          { day: '2024-03-04', data: { value: 'R$ 851.911,00', class: 'up' } },
          { day: '2024-03-31', data: { value: 'R$ 615.211,00', class: 'down' } },
          { day: '2024-03-31', data: { value: 'R$ 673,00', class: 'up' } }
        ]
      };
    }, 2000);
  }

  cli(eve: any) {
    console.log('cuida', eve);
  }
}
