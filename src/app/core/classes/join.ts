import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Join {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const joinObserver = new Observable(observer => {
      this.twitchClient.on('join', (channel, username, self) => {
        const payload = {
          channel,
          username,
          self,
          type: 'join'
        };
        console.error(payload);
        observer.next(payload);
      });
    });
    return joinObserver;
  }
}
