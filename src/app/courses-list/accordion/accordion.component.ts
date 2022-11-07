import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionContent = [
    { header: 'Status', type: 'Check', items: ['New', 'Popular', 'Top Rated'] },
    { header: 'Level', type: 'Check', items: ['Beginner', 'Intermediate', 'Advanced'] },
  ];
  constructor() {}

  ngOnInit(): void {}
}
