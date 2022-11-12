import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input('rating') rating: number = 0;
  counter = 0;
  ratingList!: string[];
  constructor() {}

  ngOnInit(): void {
    this.ratingList = this.ratingParser();
  }

  ratingParser() {
    let result = [];
    for (let i = 0; i < Math.floor(this.rating / 20); i++) {
      this.counter++;
      result.push('full');
    }
    if (this.rating % 20) {
      result.push('half');
      this.counter++;
    }
    while (this.counter < 5) {
      result.push('empty');
      this.counter++;
    }
    return result;
  }
}
