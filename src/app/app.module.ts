import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService implements ErrorHandler {
  constructor() {
    // not to do
  }

  handleError(error: any) {
    console.log('error');
    console.log(error);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, NgbModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
