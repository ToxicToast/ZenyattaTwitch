import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Cheer {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('cheer', (channel, userstate, message) => {
        const payload = {
          channel,
          userstate,
          message,
          type: 'cheer'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
