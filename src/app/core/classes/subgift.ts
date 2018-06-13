import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Subgift {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('subgift', (channel, username, recipient, method, userstate) => {
        const payload = {
          channel,
          username,
          recipient,
          method,
          userstate,
          type: 'subgift'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
