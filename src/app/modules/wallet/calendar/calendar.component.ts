import { Component, EventEmitter, Input, Output } from '@angular/core';

export class Calendar {
  currentDate: Date;

  constructor(currentDate: Date, options: {}) {}
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  currentDate: Date = new Date();

  @Input() data: any = {};

  @Input() title: any = {};

  @Input() headers: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  @Output() valueClicked = new EventEmitter();

  @Output() dayClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      [
        { date: '2024-03-09', data: { value: 'R$ 1.964.768,00', class: 'down' } },
        { date: '2024-03-09', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-03-15', data: { value: 'R$ 1.964.768,00', class: 'down' } },
        { date: '2024-03-15', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-03-21', data: { value: 'R$ 1.964.768,00', class: 'down' } },
        { date: '2024-03-21', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-03-30', data: { value: 'R$ 1.964.768,00', class: 'down' } },
        { date: '2024-03-30', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-02-28', data: { value: 'R$ 335.696.673,00', class: 'down' } },
        { date: '2024-02-28', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-04-03', data: { value: 'R$ 335.696.673,00', class: 'down' } },
        { date: '2024-04-03', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-03-12', data: { value: 'R$ 335.696.673,00', class: 'up' } },
        { date: '2024-03-05', data: { value: 'R$ 335.696.673,00', class: 'down' } },
        { date: '2024-03-04', data: { value: 'R$ 411.911,00', class: 'down' } },
        { date: '2024-03-04', data: { value: 'R$ 851.911,00', class: 'up' } },
        { date: '2024-03-31', data: { value: 'R$ 615.211,00', class: 'down' } },
        { date: '2024-03-31', data: { value: 'R$ 673,00', class: 'up' } }
      ].forEach((_) => {
        this.addData(_.date, _.data);
      });
    }, 1000);

    console.log('aqui', this.data);
  }

  addData(date: string, event: any): void {
    console.log(date);

    if (!this.data[date]) {
      this.data[date] = [];
    }
    this.data[date].push(event);
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getCalendarWeeks(date: Date): Date[][] {
    const weeks: Date[][] = [];
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Retrocede para o primeiro dia da semana
    let currentDate = new Date(startDate);

    while (currentDate <= endOfMonth || currentDate.getMonth() === date.getMonth()) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }

    return weeks;
  }
  verificarMesAtual(data: Date): boolean {
    const dataAtual = new Date(this.currentDate);
    const isCurrrentMoth =
      dataAtual.getFullYear() === data.getFullYear() && dataAtual.getMonth() === data.getMonth();

    return !isCurrrentMoth;
  }

  isToday(date: Date): boolean {
    const currentDate = this.currentDate;
    date.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return currentDate.getTime() === date.getTime();
  }

  addMonths(months: number): Date {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(this.currentDate.getMonth() + months);
    return newDate;
  }
}
