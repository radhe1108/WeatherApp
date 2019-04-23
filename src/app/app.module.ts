import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import{DataserviceService} from './dataservice.service';
import {FormsModule}from '@angular/forms';
import { MaindetailComponent } from './maindetail/maindetail.component';
import { DaywisedetailsComponent } from './daywisedetails/daywisedetails.component'


@NgModule({
  declarations: [
    AppComponent,
    MaindetailComponent,
    DaywisedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
