import { Component, Input, OnInit } from '@angular/core';
import { CourseInfoI } from 'src/app/core/interfaces/course-info.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input('course') course!: CourseInfoI;
  constructor() {}

  ngOnInit(): void {
    this.getFeatures();
  }

  getFeatures() {
    let diff =
      new Date().getTime() - new Date(this.course.CreatedData).getTime();
    let days = Math.ceil(diff / (1000 * 3600 * 24));
    if (days < 10) this.course.features.new = true;
    if (this.course.StudentsNo >= 200 && this.course.Rating >= 90)
      this.course.features.top = true;
    if (this.course.StudentsNo >= 3000) this.course.features.popular = true;
  }
}
