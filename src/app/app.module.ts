import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnewsComponent } from './topnews/topnews.component';
import {HttpClientModule} from '@angular/common/http'
import { NewsapiserviceService } from './newsapiservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';









@NgModule({
  declarations: [
    AppComponent,
    TopnewsComponent,
    TechnewsComponent,
    BusinessnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
