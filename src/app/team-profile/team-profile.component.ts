import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../services/tournament.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  param: any;
  profile: any;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private ngxLoader: NgxUiLoaderService, private readonly tourservice: TournamentService) {
    this.route.params.subscribe(params => this.param = params.team_id);
  }


  ngOnInit(): void {
    this.ngxLoader.start();
    this.getTeamProfile(this.param);
  }


  getTeamProfile(param: any) {
    console.log(param);
    this.tourservice.getTeamProfile(param).subscribe((result) => {
      console.log(result);
      this.profile = result[0];
      this.loaded = true;
      this.ngxLoader.stop();
    });
  }
}
