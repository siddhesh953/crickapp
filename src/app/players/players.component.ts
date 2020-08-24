import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  countries: any[] = [];

  constructor(private readonly tourservice: TournamentService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.getPlayers();
    this.getCountries();
  }


  getPlayers() {
    this.tourservice.getPlayers().subscribe(result => {
      this.players = result;
      this.ngxLoader.stop();
    });
  }

  getCountries() {
    this.tourservice.getCountries().subscribe((result) => {
      console.log(result);
      this.countries = result;
    });
  }
  selectCountry(country: any) {
    this.ngxLoader.start();
    this.getPlayerByCountry(country);
  }

  getPlayerByCountry(country) {
    this.tourservice.getPlayerByCountry(country).subscribe((result) => {
      console.log(result);
      this.players = result;
      this.ngxLoader.stop();
    });
  }

}
