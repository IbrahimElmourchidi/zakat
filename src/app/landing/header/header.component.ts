import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/langauge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public langaugeService:LanguageService) { }

  ngOnInit(): void {
  }

}
