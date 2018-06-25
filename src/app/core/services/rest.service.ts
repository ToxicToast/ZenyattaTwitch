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
  private addUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.twitch.tv/kraken/';
    this.clientId = environment.twitch.clientID;
    this.addUrl = '';
  }

  getTwitchApi(endpoint: string) {
    return this.http.get(`${this.baseUrl}${endpoint}?client_id=${this.clientId}${this.addUrl}`);
  }

  putTwitchApi(endpoint: string, data: any) {
    return this.http.put(`${this.baseUrl}${endpoint}?client_id=${this.clientId}${this.addUrl}`, data);
  }

  postTwitchApi(endpoint: string, data: any) {
    return this.http.put(`${this.baseUrl}${endpoint}?client_id=${this.clientId}${this.addUrl}`, data);
  }

  authTwitch(endpoint: string, data: any) {
    this.baseUrl = 'https://id.twitch.tv/';
    this.addUrl = '&redirect_uri=http://localhost&response_type=token&scope=viewing_activity_read';
    return this.postTwitchApi(endpoint, data);
  }

}
