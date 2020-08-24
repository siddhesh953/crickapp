import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../services/tournament.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.css']
})
export class MatchSummaryComponent implements OnInit {
  param: any;
  summary: any;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private ngxLoader: NgxUiLoaderService, private readonly tourservice: TournamentService) {
    this.route.params.subscribe(params => this.param = params.match_id);
  }

  ngOnInit(): void {
    console.log(this.param);
    this.ngxLoader.start();
    this.getSummary(this.param);
  }

  getSummary(param: any) {
    console.log(param);
    this.tourservice.getSummary(param).subscribe((result) => {
      console.log(result);
      this.summary = result[0];
      this.calculatewinMargin();
      this.loaded = true;
      this.ngxLoader.stop();
    });
  }

  calculatewinMargin() {
    if (this.summary.winner === this.summary.bat_first) {
      const winDiff = this.summary.team1_score - this.summary.team2_score;
      this.summary.win_diff = winDiff + ' Runs';
    }
    else {
      if (this.summary.winner === this.summary.team_1) {
        const winDiff = 10 - this.summary.team1_wick;
        this.summary.win_diff = winDiff + ' Wickets';
      } else {
        const winDiff = 10 - this.summary.team2_wick;
        this.summary.win_diff = winDiff + ' Wickets';
      }
    }
  }

}
