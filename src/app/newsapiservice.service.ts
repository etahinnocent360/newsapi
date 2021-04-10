import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
  
  // private _http: any;
  

  constructor(private _http: HttpClient) { }



  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=8bda72fe89d14b559582afb9ee2b4f19';

  techApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8bda72fe89d14b559582afb9ee2b4f19';
  businessApiUrl ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8bda72fe89d14b559582afb9ee2b4f19'
  topnews():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  technews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

   businessnews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }
}
