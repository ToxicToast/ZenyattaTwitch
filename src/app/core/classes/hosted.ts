import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Hosted {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('hosted', (channel, username, viewers, autohost) => {
        const payload = {
          channel,
          username,
          viewers,
          autohost,
          type: 'hosted'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
