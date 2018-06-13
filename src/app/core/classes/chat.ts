import * as Twitch from 'twitch-js';
import { Observable } from 'rxjs';

export class Chat {

  constructor(
    private twitchClient: Twitch.Client
  ) { }

  getPayload() {
    const chatObserver = new Observable(observer => {
      this.twitchClient.on('chat', (channel, userstate, message, self) => {
        const payload = {
          channel,
          userstate,
          message,
          self,
          type: 'chat'
        };
        observer.next(payload);
      });
    });
    return chatObserver;
  }
}
