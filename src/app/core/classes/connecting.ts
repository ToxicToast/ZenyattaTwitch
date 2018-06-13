import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Connecting {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('connecting', (address, port) => {
        const payload = {
          address,
          port,
          type: 'connecting'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
