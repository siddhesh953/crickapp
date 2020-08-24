import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TournamentTableComponent } from './tournament-table/tournament-table.component';


const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  },
  {
    path: 'matches',
    component: MatchesComponent
  },
  {
    path: 'match_summary/:match_id',
    component: MatchSummaryComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'team_profile/:team_id',
    component: TeamProfileComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'tour',
    component: TournamentTableComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
