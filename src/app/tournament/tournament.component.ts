import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit{
  
  constructor(private apiGet:ApiServiceService){}
  title = 'CrickApp';
  list:any[]=[];
  
  isLoading:boolean=true;
  listOfMatches:any;
  seriesId:number|undefined;
  selectedMatchType:string='International';
  
  
   ngOnInit(): void {
   this.apiGet.getListOfMatches().subscribe({
    next:(data:any)=>{
      this.isLoading=false;
      if(data && data.typeMatches){
        
        this.list=data.typeMatches;
        console.log(this.list);

        this.getMatches();
      }
    }
   });
  console.log(this.selectedMatchType);
  

  }
  listOfSeriesName:string[]=[]; 

  getMatches(){
    this.listOfMatches=this.list.find((item)=>item.matchType===this.selectedMatchType);
    this.listOfMatches = this.listOfMatches.seriesAdWrapper;
    console.log(this.listOfMatches);
    console.log(this.selectedMatchType);
    
    
  }

  getSeriesId(seriesId:number){
    this.seriesId=seriesId;
    this.apiGet.seriesId=seriesId;
    console.log(this.seriesId);
   }

}
