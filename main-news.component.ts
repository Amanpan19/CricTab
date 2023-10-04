import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  news:any[]=[];
  constructor(private apiGet:ApiServiceService){}
  ngOnInit(): void {
    this.apiGet.getMainNews().subscribe({
      next:(data:any)=>{
        console.log(data);
        
        if(data && data.newsList){
          this.news=data.newsList;
          console.log(this.news);
        }
      }
     })
  }
}
