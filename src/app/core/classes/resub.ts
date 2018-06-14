import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Resub {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('resub', (channel, username, months, message, userstate, methods) => {
        const payload = {
          channel,
          username,
          months,
          message,
          userstate,
          methods,
          type: 'resub'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
