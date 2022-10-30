import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/langauge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private langaugeService:LanguageService) { }

  ngOnInit(): void {
  }

  setlang(lang:string){
    this.langaugeService.setLanguage(lang)
  }
}
