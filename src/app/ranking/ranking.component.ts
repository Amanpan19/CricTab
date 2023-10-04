import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  selectedValue:string|undefined='odi';
  rankingType:string|undefined='batsmen';
  teamRankingList:any[]=[];
  rankingList:any[]=[];
  teams:boolean=true;
  imgUrl:any;
  constructor(private api_GetRan:ApiServiceService){}
  ngOnInit(): void {
 
    this.changedValue();
  }

  changedValue(){
    if(this.rankingType !== 'teams'){
      this.teams=true;
      this.api_GetRan.getRanking(this.selectedValue,this.rankingType).subscribe((data:any)=>{
        console.log(data.rank);
        if(data.rank){
          this.rankingList=data.rank;
        }
    })}
    if(this.rankingType === 'teams'){
      this.teams=false;
        this.api_GetRan.getTeamRanking(this.selectedValue).subscribe((data:any)=>{
          console.log(data.rank);
          if(data.rank){
            this.teamRankingList=data.rank;
          }
        })
      }
    console.log(this.selectedValue);
    console.log(this.rankingType);

    }
  //  fetchImage(imgId:any){
  //   console.log(imgId);
  //   this.api_GetRan.imgId=imgId;
  //   this.api_GetRan.getImage(imgId).subscribe(data=>{
  //     this.imgUrl=data;
  //     console.log(this.imgUrl);
  //   })
  //  } 
}
