import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatchesComponent } from './matches/matches.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TournamentTableComponent } from './tournament-table/tournament-table.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    MatchSummaryComponent,
    TeamProfileComponent,
    TournamentTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgxUiLoaderModule,
    MatTableModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
