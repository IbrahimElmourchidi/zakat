import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages: string[] = ['en', 'ar'];

  constructor(public translate: TranslateService) {
    let browserLang: string = navigator.language.toLowerCase();
    let storedLang = localStorage.getItem('lang');
    if (!storedLang) {
      if (browserLang.includes('ar')) translate.use('ar');
      else translate.use('en');
    } else translate.use(storedLang);
  }

  public setLanguage(lang: any, isLeft: boolean) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    let root = document.querySelector('html');
    root?.setAttribute('dir', isLeft ? 'lrt' : 'rtl');
  }
}
