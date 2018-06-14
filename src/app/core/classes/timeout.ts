import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Timeout {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('timeout', (channel, username, reason, duration) => {
        const payload = {
          channel,
          username,
          reason,
          duration,
          type: 'timeout'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
