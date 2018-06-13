import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Connected {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('connected', (address, port) => {
        const payload = {
          address,
          port,
          type: 'connected'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
