import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface CurrentLang {
  name: string;
  isLeft: boolean;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public currentLange: CurrentLang = {
    name: 'en',
    isLeft: true,
  };
  private languages: string[] = ['en', 'ar'];

  constructor(public translate: TranslateService) {
    let browserLang: string = navigator.language.toLowerCase();
    let storedLang = localStorage.getItem('lang');
    if (!storedLang) {
      if (browserLang.includes('ar')) this.setLanguage('ar');
      else this.setLanguage('en');
    } else this.setLanguage(storedLang);
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLange = {
      name: lang,
      isLeft: lang === 'en',
    };
    localStorage.setItem('lang', lang);
    localStorage.setItem('dir', lang === 'en' ? 'lrt' : 'rtl');
    let root = document.querySelector('html');
    root?.setAttribute('dir', lang === 'en' ? 'lrt' : 'rtl');
  }
}
