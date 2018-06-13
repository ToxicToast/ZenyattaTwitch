import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Unhost {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('unhost', (channel, viewers) => {
        const payload = {
          channel,
          viewers,
          type: 'unhost'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
