import { Injectable, inject } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleToolbarService {
  private router = inject(Router);

  private _title = new BehaviorSubject<any>('Welcome back!');

  constructor() {
    this.init();
  }

  private init(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        const title = data.snapshot.data['title'];
        this._title.next(title);
      }
    });
  }

  get title() {
    return this._title.asObservable();
  }
}
