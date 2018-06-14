import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Part {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const partObserver = new Observable(observer => {
      this.twitchClient.on('part', (channel, username, self) => {
        const payload = {
          channel,
          username,
          self,
          type: 'part'
        };
        observer.next(payload);
      });
    });
    return partObserver;
  }
}
