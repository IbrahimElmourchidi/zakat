import { Component, OnInit } from '@angular/core';
import { CourseInfoI } from 'src/app/core/interfaces/course-info.interface';
import { LanguageService } from 'src/app/core/services/langauge.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  popularCourses: CourseInfoI[] = [
    {
      Title: 'Angualar',
      Instructor: { Name: 'Ibrahim Elmourchidi' },
      Thumb: '../../../assets/img/thumb.jpg',
      plot: 'angular from zero to hero',
      Rating: 90,
      Tags: ['Web Dev', 'TS'],
      StudentsNo: 300,
      CreatedData: '2022-11-05T22:00:00.000Z',
      UpdateData: '2022-11-05T22:00:00.000Z',
      features: {
        new: false,
        top: false,
        popular: false,
      },
    },
    {
      Title: 'Angualar the complete developer guid',
      Instructor: { Name: 'Ibrahim Elmourchidi' },
      Thumb: '../../../assets/img/thumb.jpg',
      plot: 'angular from zero to hero',
      Rating: 90,
      Tags: ['Web Dev', 'TS'],
      StudentsNo: 100,
      CreatedData: '2022-11-15T22:00:00.000Z',
      UpdateData: '2022-11-15T22:00:00.000Z',
      features: {
        new: false,
        top: false,
        popular: false,
      },
    },
    {
      Title: 'Angualar the complete developer guid',
      Instructor: { Name: 'Ibrahim Elmourchidi' },
      Thumb: '../../../assets/img/thumb.jpg',
      plot: 'angular from zero to hero',
      Rating: 90,
      Tags: ['Web Dev', 'Type Script', "Ui Develop", "Frontend"],
      StudentsNo: 100,
      CreatedData: '2022-11-05T22:00:00.000Z',
      UpdateData: '2022-11-05T22:00:00.000Z',
      features: {
        new: false,
        top: false,
        popular: false,
      },
    },
    {
      Title: 'Angualar the complete developer guid',
      Instructor: { Name: 'Ibrahim Elmourchidi' },
      Thumb: '../../../assets/img/thumb.jpg',
      plot: 'angular from zero to hero',
      Rating: 90,
      Tags: ['Web Dev', 'TS'],
      StudentsNo: 100,
      CreatedData: '2022-11-05T22:00:00.000Z',
      UpdateData: '2022-11-05T22:00:00.000Z',
      features: {
        new: false,
        top: false,
        popular: false,
      },
    },
    {
      Title: 'Angualar the complete developer guid',
      Instructor: { Name: 'Ibrahim Elmourchidi' },
      Thumb: '../../../assets/img/thumb.jpg',
      plot: 'angular from zero to hero',
      Rating: 90,
      Tags: ['Web Dev', 'TS'],
      StudentsNo: 100,
      CreatedData: '2022-11-05T22:00:00.000Z',
      UpdateData: '2022-11-05T22:00:00.000Z',
      features: {
        new: false,
        top: false,
        popular: false,
      },
    },
    {
      Title: 'Angualar the complete developer guid',
      Instructor: { Name: 'Ibrahim Elmourchidi' },
      Thumb: '../../../assets/img/thumb.jpg',
      plot: 'angular from zero to hero',
      Rating: 90,
      Tags: ['Web Dev', 'TS'],
      StudentsNo: 100,
      CreatedData: '2022-11-05T22:00:00.000Z',
      UpdateData: '2022-11-05T22:00:00.000Z',
      features: {
        new: false,
        top: false,
        popular: false,
      },
    },


  ];
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  IsLeft() {
    return this.languageService.currentLange.isLeft;
  }
}
