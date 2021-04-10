import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {
  [x: string]: any;
  

  constructor(private _services: NewsapiserviceService) { }
  technewsDisplay: any;
  ngOnInit(): void {

     this._services.technews().subscribe((result) =>
    {
      // console.log(result);
      this.technewsDisplay =result.articles;
    })
  }

}
