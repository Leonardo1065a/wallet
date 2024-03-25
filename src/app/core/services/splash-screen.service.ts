import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {
  private el: any;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.el = this.document.body.querySelector('#splash-screen');
  }

  hide(): void {
    this.document.body.style.pointerEvents = 'all';
    this.el.style.display = 'none';
  }
}
