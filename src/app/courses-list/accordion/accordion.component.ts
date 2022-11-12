import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionContent = [
    {
      header: 'Level',
      type: 'check',
      keys: ['Beginner', 'Intermediate', 'Advanced'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
