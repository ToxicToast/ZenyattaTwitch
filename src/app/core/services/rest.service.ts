import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl: string;
  private clientId: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.twitch.tv/kraken/';
    this.clientId = environment.twitch.clientID;
  }

  getTwitchApi(endpoint: string) {
    return this.http.get(`${this.baseUrl}${endpoint}?client_id=${this.clientId}`);
  }

}
