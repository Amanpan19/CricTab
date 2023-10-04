import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  scoreBoard:any[]=[];
  isLoading:boolean=true;
  
  constructor(private api_Get:ApiServiceService){}
  ngOnInit(): void {
   this.api_Get.getScoreBoard().subscribe((data:any)=>{
    this.isLoading=false;
    if(data){
      this.scoreBoard=data.scorecard;
      console.log(this.scoreBoard);
    }
   })
  }

}
