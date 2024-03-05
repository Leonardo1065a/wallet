import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

interface Data {
  day: string;
  data: {
    value: string;
    class: string;
  };
}

interface Week {
  isToday: boolean;
  day: Date;
  isCurrentMonth: boolean;
}
export class Calendar {
  currentDate: Date;
  headers?: string[];
  data?: Data[];
  title?: string;
  showPreviousNextBtn?: boolean;
  showPeriodBeforeAndAfter?: boolean;
  actionWhenClickOnDay?: boolean;
  style?: {
    headerColor: string;
    bodyColor: string;
  };

  constructor(options: Calendar) {
    this.currentDate = options?.currentDate;
    this.data = options?.data;
    this.title = options?.title;
    this.showPeriodBeforeAndAfter = options?.showPeriodBeforeAndAfter || false;
    this.actionWhenClickOnDay = options?.actionWhenClickOnDay || false;
    this.showPreviousNextBtn = options?.showPreviousNextBtn || true;

    this.headers = options.headers || [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  }
}

@Component({
  selector: 'app-calendar[calendar]',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {
  @Input() calendar: Calendar = new Calendar({ currentDate: new Date() });

  @Output() dataClicked = new EventEmitter();

  @Output() dayClicked = new EventEmitter();

  _currentDate: Date;

  _events: any = {};

  _weeks: Week[][];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['calendar']) {
      const { currentValue } = changes['calendar'];
      if (currentValue && JSON.stringify(currentValue !== '{}')) {
        this.init();
      }
    }
  }

  private init() {
    const { calendar, _events } = this;
    this._currentDate = calendar.currentDate;

    this.initCalendar(this._currentDate);

    if (calendar.data) {
      calendar.data.forEach(({ day, data }) => {
        if (!_events[day]) {
          this._events[day] = [];
        }
        this._events[day].push(data);
      });
    }
  }

  private initCalendar(date: Date) {
    const weeks: Week[][] = [];

    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const currentDate = new Date(startDate);

    while (currentDate <= endOfMonth || currentDate.getMonth() === date.getMonth()) {
      const week: Week[] = [];
      for (let i = 0; i < 7; i++) {
        const day = new Date(currentDate);

        week.push({
          day,
          isCurrentMonth: this.isCurrentMonth(day),
          isToday: this.isToday(day)
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }

    this._weeks = weeks;
  }

  private isCurrentMonth(data: Date): boolean {
    const dataAtual = new Date(this._currentDate);
    const isCurrrentMoth =
      dataAtual.getFullYear() === data.getFullYear() && dataAtual.getMonth() === data.getMonth();

    return isCurrrentMoth;
  }

  private isToday(date: Date): boolean {
    const currentDate = new Date();
    date.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return currentDate.getTime() === date.getTime();
  }

  nextMonth(value: number) {
    const newDate = new Date(this._currentDate);
    newDate.setMonth(this._currentDate.getMonth() + value);

    this._currentDate = newDate;

    this.initCalendar(newDate);
  }
}
