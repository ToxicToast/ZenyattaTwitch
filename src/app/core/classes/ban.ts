import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Ban {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('ban', (channel, username, reason) => {
        const payload = {
          channel,
          username,
          reason,
          type: 'ban'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
