import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any[] = [];

  constructor(private readonly tourservice: TournamentService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.getMatches();
  }


  getMatches() {
    this.tourservice.getMatchlist().subscribe((result) => {
      console.log(result);
      this.matches = result;
      this.ngxLoader.stop();
    });
  }
}
