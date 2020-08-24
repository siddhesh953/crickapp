import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-tournament-table',
  templateUrl: './tournament-table.component.html',
  styleUrls: ['./tournament-table.component.css']
})
export class TournamentTableComponent implements OnInit {
  tournamentTable: any[] = [];

  constructor(private readonly tourservice: TournamentService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.getTeams();
  }


  getTeams() {
    this.tourservice.getTournamentlist().subscribe((result) => {
      console.log(result);
      this.tournamentTable = result;
      this.ngxLoader.stop();
    });
  }
}
