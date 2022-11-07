import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from './main/main.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LandingComponent, MainComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    SharedModule,
  ],
})
export class LandingModule {}
