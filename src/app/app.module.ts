import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchesComponent } from './matches/matches.component';
import { NewsComponent } from './news/news.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HttpClientModule} from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ScoreBoardComponent } from './score-board/score-board.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MainNewsComponent } from './main-news/main-news.component';
import { RankingComponent } from './ranking/ranking.component';
import {MatChipsModule} from '@angular/material/chips';
import { LiveMatComponent } from './live-mat/live-mat.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    NewsComponent,
    TournamentComponent,
    NavBarComponent,
    ScoreBoardComponent,
    MainNewsComponent,
    RankingComponent,
    LiveMatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
