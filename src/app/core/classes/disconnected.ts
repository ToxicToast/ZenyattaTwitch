import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Disconnected {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('disconnected', (reason) => {
        const payload = {
          reason,
          type: 'disconnected'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
