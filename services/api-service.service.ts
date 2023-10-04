import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  public seriesId:number|undefined;
  public matchId:number|undefined;
  public humanType:any;
  

     rapidApiKey: string = ;// generate ur own apiKey from rapidApi(Unoffical cricbuzz)
   
     rapidApiKey2: string = ;// rapidApi (cricbuzz api)

  url: string = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/list';
  

  constructor(private http:HttpClient) { }

 

// Create HttpHeaders object
getListOfMatches():Observable<any>{
  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey,
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);
  
  return this.http.get(`${this.url}`,reqOption)
}


getLiveMatches():Observable<any>{
  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey2,
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);
  
  return this.http.get(`https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live`,reqOption)
}

getMatchInfo(getSeriesId:any){
  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey,
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);
  
  return this.http.get(`https://unofficial-cricbuzz.p.rapidapi.com/series/get-matches?seriesId=${getSeriesId}`,reqOption)
  // return this.http.get(`https://unofficial-cricbuzz.p.rapidapi.com/series/get-matches?seriesId=6906`,reqOption)
}



getScoreBoard(){
 let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey,
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);

  return this.http.get(`https://unofficial-cricbuzz.p.rapidapi.com/matches/get-scorecard?matchId=${this.matchId}`,reqOption);
  
}


getRanking(type:any,position:any){

  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey2,
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);

  return this.http.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/${position}?formatType=${type}`,reqOption);
}


getTeamRanking(type:any){
  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey2,
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);

  return this.http.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams?formatType=${type}`,reqOption);
}


getImage(imgId:any){

  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey2,
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);
 
  return this.http.get(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imgId}/i.jpg`,reqOption);
}


getNews(){
  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey,
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);

  return this.http.get(`https://unofficial-cricbuzz.p.rapidapi.com/series/get-news?seriesId=${this.seriesId}`,reqOption)
}

getMainNews(){
  let httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': this.rapidApiKey,
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
  });
  let reqOption = {headers:httpHeader};
  console.log(reqOption);

  return this.http.get(`https://unofficial-cricbuzz.p.rapidapi.com/news/list`,reqOption);
}

}
