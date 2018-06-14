import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Mod {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('mod', (channel, username) => {
        const payload = {
          channel,
          username,
          type: 'mod'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
