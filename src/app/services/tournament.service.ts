import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/internal/operators/tap';
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  baseUrl = environment.API_URL;
  constructor(private readonly http: HttpClient) { }


  getMatchlist(): Observable<any> {
    return this.http.get(`${this.baseUrl}/matches`).pipe(tap((response) => response));
  }

  getTeams(): Observable<any> {
    console.log(`${this.baseUrl}/teams`);
    return this.http.get(`${this.baseUrl}/teams`).pipe(tap((response) => response));
  }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/players`).pipe(tap((response) => response));
  }

  getSummary(param: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/match_sum?matchsum_id=${param}`).pipe(tap((response) => response));
  }

  getTeamProfile(param: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/team_profile?teamProfile_id=${param}`).pipe(tap((response) => response));
  }

  getTournamentlist(): Observable<any> {
    console.log('jk');
    return this.http.get(`${this.baseUrl}/tournament_table`).pipe(tap((response) => response));
  }

  getCountries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countries`).pipe(tap((response) => response));
  }

  getPlayerByCountry(country: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/players?nationality=${country}`).pipe(tap((response) => response));
  }


}
