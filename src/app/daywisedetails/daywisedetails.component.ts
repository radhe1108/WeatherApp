import { Component, OnInit, Input } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-daywisedetails',
  templateUrl: './daywisedetails.component.html',
  styleUrls: ['./daywisedetails.component.css']
})
export class DaywisedetailsComponent implements OnInit {
  @Input() childday;
  @Input() childdescription;
  @Input() tempmin;
  @Input() tempmax;
  @Input() humidity;
  constructor() { }

  ngOnInit() {
  }

}
