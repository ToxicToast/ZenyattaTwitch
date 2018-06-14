import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Reconnect {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('reconnect', () => {
        const payload = {
          type: 'reconnect'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
