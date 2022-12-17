import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-parser',
  templateUrl: './filter-parser.component.html',
  styleUrls: ['./filter-parser.component.scss'],
})
export class FilterParserComponent implements OnInit {
  @Input('type') type: string = 'check';
  @Input('keys') keys: string[] = [];
  @Output('qs') qs: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}

  ratingToPoint(val:any){
    if(isNaN(val)) return;
    return (Math.round(parseInt(val)/2)/10)
  }

  getInt(val:any){
    if(isNaN(val)) return 0;
    return parseInt(val)
  }
}
