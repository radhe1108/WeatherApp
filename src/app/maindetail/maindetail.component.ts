import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maindetail',
  templateUrl: './maindetail.component.html',
  styleUrls: ['./maindetail.component.css']
})
export class MaindetailComponent implements OnInit {

  @Input() childname: string;
  @Input() childcity: string;
  @Input() childtemp: number;
  @Input() childhumidity: number;
  @Input() childdescription: string;
  @Input() childwind: string;
  constructor() { }

  ngOnInit() {
  }

}
