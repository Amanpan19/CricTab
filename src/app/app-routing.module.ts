import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { TournamentComponent } from './tournament/tournament.component';
import { NewsComponent } from './news/news.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {path:'',component:TournamentComponent},
  {path:'matches',component:MatchesComponent},
  {path:'news',component:NewsComponent},
  {path:'scoreBoard',component:ScoreBoardComponent},
  {path:'ranking',component:RankingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
