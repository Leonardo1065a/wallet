import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public init(callback: Function, styleGuide: { colors: any; font: any }) {
    this.handleColors(styleGuide.colors);

    this.handleFont(styleGuide.font);

    setTimeout(() => {
      callback();
    }, 1000);
  }

  handleColors(colors: any) {
    ['theme', 'contrast'].forEach((type) => {
      Object.entries(colors[type] as any).forEach(([paletteKey, paletteValue]) => {
        this.document.documentElement.style.setProperty(
          `--color-${type}-${paletteKey}`,
          `${paletteValue}`
        );
      });
    });
  }

  handleFont(font: { url: string; name: string }) {
    document.body.style.setProperty('--bs-body-font-family', `\'${font.name}\', sans-serif`);

    let link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('href', `${font.url}`);
    link.setAttribute('rel', 'stylesheet');
    this.document.head.appendChild(link);
  }
}
