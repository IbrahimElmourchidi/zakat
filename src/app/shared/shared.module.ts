import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { HorizontalCourselistComponent } from './horizontal-courselist/horizontal-courselist.component';
import { FilterParserComponent } from '../courses-list/filter-parser/filter-parser.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    CourseCardComponent,
    HorizontalCourselistComponent,
    StarRatingComponent,
  ],
  imports: [CommonModule],
  exports: [
    CourseCardComponent,
    HorizontalCourselistComponent,
    StarRatingComponent,
  ],
})
export class SharedModule {}
