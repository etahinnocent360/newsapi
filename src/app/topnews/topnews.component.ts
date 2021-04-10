import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit {
  [x: string]: any;

  
  constructor(private _services:NewsapiserviceService) { }
   topnewsDisplay: any;
  ngOnInit(): void {

    this._services.topnews().subscribe((result) =>
    {
      console.log(result);
      this.topnewsDisplay =result.articles;
    })
  }

}
