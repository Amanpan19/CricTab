import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit{

  constructor(private api_List:ApiServiceService){}
 
  seriesId?:number;
 
  list:any[]=[];
  listOfMatches:any[]=[];
  matches:any[]=[];
  currentMatch:any;
  matchFormat:string='';
  public imageUrl: string = ''; 
 
   ngOnInit(): void {
    this.getMatches();
   }
 
  
 
   getMatches(){
     this.seriesId=this.api_List.seriesId
     this.api_List.getMatchInfo(this.seriesId).subscribe((data:any)=>{
     //   console.log("hello");
     //   console.log(this.seriesId);
       if(data){
         this.list=data;
         console.log(this.list);
         console.log(data.adWrapper);
         this.listOfMatches = data.adWrapper;
 
         for (const item of data.adWrapper) {
           if (item.matchDetails && item.matchDetails.matches) {
             this.matches.push(item.matchDetails.matches);
           }
         }
         // this.matches = data.adWrapper[this.listOfMatches.length-1].matchDetails?.matches;
          console.log(this.matches);
          
       }
   })
   
   console.log(this.seriesId);
   
   }
 
   getFormat(format:any){
        this.matchFormat=format;
        console.log(this.matchFormat);
        
   }

   getMatchId(matchId:number){
      this.api_List.matchId=matchId;
      console.log(this.api_List.matchId);
   }
   
 }