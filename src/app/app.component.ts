import { Component } from '@angular/core';
import { LanguageService } from './core/services/langauge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zakat';
  constructor(public languageService:LanguageService){}
}
