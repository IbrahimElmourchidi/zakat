import { Component, OnInit } from '@angular/core';
import { FilterMenuI } from 'src/app/core/interfaces/filter-menu.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionContent: FilterMenuI[] = [
    {
      Header: 'Level',
      Type: 'check',
      Items: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
      Header: 'Rating',
      Type: 'rating',
      Items: ['60', '70', '80', '90'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
