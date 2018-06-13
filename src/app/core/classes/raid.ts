import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Raid {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('raid', (channel, raider, viewers, userstate) => {
        const payload = {
          channel,
          raider,
          viewers,
          userstate,
          type: 'raid'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
