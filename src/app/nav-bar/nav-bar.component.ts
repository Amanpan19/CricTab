import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  type:any=''
  constructor(private api_get:ApiServiceService){}

  ngOnInit(): void {
    
  }
  genType(){
   this.api_get.humanType=this.type;
   console.log(this.api_get.humanType);
   console.log(this.type);
   
  }
 
}
