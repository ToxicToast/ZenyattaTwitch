import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Clearchat {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('clearchat', (channel) => {
        const payload = {
          channel,
          type: 'clearchat'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
