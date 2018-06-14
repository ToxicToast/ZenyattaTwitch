import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Subscription {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('subscription', (channel, username, method, message, userstate) => {
        const payload = {
          channel,
          username,
          method,
          message,
          userstate,
          type: 'subscription'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
