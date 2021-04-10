import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent implements OnInit {
  businessnewsDisplay: any;

  constructor(private _services: NewsapiserviceService) { }

  ngOnInit(): void {

     this._services.businessnews().subscribe((result) =>
    {
      console.log(result);
      this.businessnewsDisplay =result.articles;
    })
  }

}
