import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/langauge.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private languageService:LanguageService) { }

  ngOnInit(): void {
  }

  
  IsLeft(){
    console.log(this.languageService.currentLange);

    return this.languageService.currentLange.isLeft;
  }

}
