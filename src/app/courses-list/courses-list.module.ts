import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListRoutingModule } from './courses-list-routing.module';
import { CoursesListComponent } from './courses-list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FilterParserComponent } from './filter-parser/filter-parser.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursesListComponent,
    AccordionComponent,
    FilterParserComponent
  ],
  imports: [
    CommonModule,
    CoursesListRoutingModule,
    SharedModule
  ]
})
export class CoursesListModule { }
