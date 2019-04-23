import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client';
  name: string;
  city: string;
  Temp: number;
  humidity: number;
  description: string;
  wind: number;

  public result = new Array();

  constructor(private data: DataserviceService) {

  }

  getdata() {
    this.data.getfact(this.city).subscribe(d => {
      var object = JSON.parse(d);
      this.name = object.list[1].dt_txt;
      this.Temp = object.list[1].main.temp;
      this.humidity = object.list[1].main.humidity;
      this.description = object.list[1].weather[0].description;
      this.wind = object.list[1].wind.speed;
      this.result = [];
      for (let index = 1; index < 40; index = index + 6) {
        this.result.push(object.list[index]);
      }
      console.log(this.result[1].main.temp);
    }),
      (error) => console.log(error);

  }

}
