import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Logon {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('logon', () => {
        const payload = {
          type: 'logon'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
