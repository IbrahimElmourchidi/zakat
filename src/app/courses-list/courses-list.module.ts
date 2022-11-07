import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListRoutingModule } from './courses-list-routing.module';
import { CoursesListComponent } from './courses-list.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    CoursesListRoutingModule
  ]
})
export class CoursesListModule { }
