import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Twitch } from 'twitch-js';
import { ITwitchOptions } from '../interfaces/itwitch-options';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  twitchClient: Twitch.Client;
  twitchSubscription: Observable<any>;
  private twitchOptions: ITwitchOptions;

  constructor() {
    this.setTwitchSettings();
    this.setTwitchClient();
    this.twitchClientConnect();
  }

  private setTwitchSettings() {
    this.twitchOptions = {
      options: {
        debug: true
      },
      connection: {
        reconnect: true,
        secure: true
      },
      channels: [
        '#toxictoast'
      ],
      identity: {
        username: environment.twitch.username,
        password: environment.twitch.password
      }
    };
  }

  private setTwitchClient() {
    this.twitchClient = new Twitch.Client(this.twitchOptions);
  }

  private twitchClientConnect() {
    this.twitchClient.connect();
  }
}
