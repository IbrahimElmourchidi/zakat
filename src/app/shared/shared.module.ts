import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { HorizontalCourselistComponent } from './horizontal-courselist/horizontal-courselist.component';



@NgModule({
  declarations: [
    CourseCardComponent,
    HorizontalCourselistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CourseCardComponent,
    HorizontalCourselistComponent
  ]
})
export class SharedModule { }
