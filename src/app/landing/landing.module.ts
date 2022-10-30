import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    TranslateModule.forChild()
  ]
})
export class LandingModule { }
