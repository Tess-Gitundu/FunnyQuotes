import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'People say nothing is impossible, but I do nothing everyday.', 'A.A. Milne', 'Tess', 0, 0),
    new Quote (1, 'People say nothing is impossible, but I do nothing everyday.', 'A.A. Milne', 'Tess', 0, 0)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
