import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  newsDetails:any[]=[];
  imgGet: string | undefined;

  constructor(private api_Req : ApiServiceService){}
  ngOnInit(): void {
    this.getNewsDetails();
  }

  getNewsDetails(){
    this.api_Req.getNews().subscribe((data:any)=>{
      this.newsDetails=data.newsList;
      console.log(this.newsDetails);
      
    })
  }

  // getImages(){
  //   this.api_Req.getImage(344326).subscribe((data:any)=>{
  //     this.imgGet=data;
  //   })
  // }
   
}

