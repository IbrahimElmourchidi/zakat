import { Component, Input, OnInit } from '@angular/core';
import { CourseInfoI } from 'src/app/core/interfaces/course-info.interface';

@Component({
  selector: 'app-horizontal-courselist',
  templateUrl: './horizontal-courselist.component.html',
  styleUrls: ['./horizontal-courselist.component.scss']
})
export class HorizontalCourselistComponent implements OnInit {
  @Input('courses') courses:CourseInfoI[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
