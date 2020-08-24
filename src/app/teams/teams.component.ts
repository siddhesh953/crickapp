import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];

  constructor(private readonly tourservice: TournamentService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.getTeams();
  }


  getTeams(){
    this.tourservice.getTeams().subscribe((result) => {
      console.log(result);
      this.teams = result;
      this.ngxLoader.stop();
    });
  }
}
