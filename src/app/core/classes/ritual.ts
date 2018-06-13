import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Ritual {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('ritual', (channel, username, type, userstate) => {
        const payload = {
          channel,
          username,
          chattertype: type,
          userstate,
          type: 'ritual'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
