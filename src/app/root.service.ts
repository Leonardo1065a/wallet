import { Injectable } from '@angular/core';

import { styleGuide } from 'assets/style-guide-settings';
import { ConfigurationService } from 'waves-ui';
import { SplashScreenService } from './core/services';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  constructor(
    private configService: ConfigurationService,
    splashScreenService: SplashScreenService
  ) {
    this.configService.init(() => {
      splashScreenService.hide();
    }, styleGuide);
  }
}
