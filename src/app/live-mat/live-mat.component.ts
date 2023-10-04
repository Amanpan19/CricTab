import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-live-mat',
  templateUrl: './live-mat.component.html',
  styleUrls: ['./live-mat.component.css']
})
export class LiveMatComponent implements OnInit {
  listOfMatches:any[]=[];
  list:any;
 constructor(private api_Get:ApiServiceService){}
  ngOnInit(): void {
    this.api_Get.getLiveMatches().subscribe({
      next:data=>{
        if(data && data.typeMatches){
          this.listOfMatches=data.typeMatches;
          console.log(this.listOfMatches);
          
          this.getMatches();
        }
      }
    })
  }
  
  getMatches() {
    // Find the "International" series
    const interMatches = this.listOfMatches.find((item) => item.matchType === "International");
  
    if (interMatches) {
      const matchesArray = interMatches.seriesMatches
        .filter((match:any) => match.seriesAdWrapper && match.seriesAdWrapper.matches)
        .map((match:any) => match.seriesAdWrapper.matches)
        .reduce((accumulator:any, currentArray:any) => accumulator.concat(currentArray), []); // Flatten the arrays
  
      // Wrap the merged array in a new array
      this.list = [matchesArray];
  
      console.log(this.list);
    }
  }
  

moveLeft(){
  const container = document.getElementById('scrollerCOnt') as HTMLElement | null;
  if (container) {
    container.scrollLeft -= 650;
  }
}

moveRight(){
  const container = document.getElementById('scrollerCOnt') as HTMLElement | null;
  if (container) {
    container.scrollLeft += 580;
  }
}
}
