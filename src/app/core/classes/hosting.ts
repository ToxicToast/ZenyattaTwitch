import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Hosting {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('hosting', (channel, target, viewers) => {
        const payload = {
          channel,
          target,
          viewers,
          type: 'hosting'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
