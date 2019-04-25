import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from '@angular/core/src/render3';

@Injectable()
export class DataserviceService {

  constructor(private http: HttpClient) { }

  getfact(name: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=ab2e39f34918cea0d3075fc21a9aba1c`, { responseType: 'text' })
  }
}
