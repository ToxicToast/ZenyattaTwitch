import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { ITwitchOptions } from '../interfaces/itwitch-options';
import { IChatContract } from '../dataContract/ichat-contract';
import { IJoinContract } from '../dataContract/ijoin-contract';

import { Chat } from '../classes/chat';
import { Join } from '../classes/join';

import Twitch from 'twitch-js';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  private twitchOptions: ITwitchOptions;
  twitchClient: Twitch.Client;
  twitchSubscription: Observable<any>;
  allSubscriptions: any[];
  chatArray = [];

  public init(): void {
    this.allSubscriptions = [];
    //
    this.setTwitchSettings();
    this.setTwitchClient();
    this.twitchClientConnect();
  }

  public destroy(): void {
    this.allSubscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  public subscribeTwitch(): void {
    this.twitchSubscription = new Observable(observer => {
      // Chat Messages
      const chat = new Chat(this.twitchClient);
      const chatSubscription = chat.getPayload().subscribe((chatMessages: IChatContract) => {
        this.chatArray.push(chatMessages);
        observer.next(this.chatArray);
      });
      // Join Messages
      const join = new Join(this.twitchClient);
      const joinSubscription = join.getPayload().subscribe((joinMessages: IJoinContract) => {
        this.chatArray.push(joinMessages);
        observer.next(this.chatArray);
      });
      // Push Subscriptions to Array for Unsubscription later
      this.allSubscriptions.push(chatSubscription);
      this.allSubscriptions.push(joinSubscription);
    });
  }

  private setTwitchSettings(): void {
    this.twitchOptions = {
      options: {
        debug: true
      },
      connection: {
        reconnect: true,
        secure: true
      },
      channels: [
        '#youbetterknowme'
      ],
      identity: {
        username: environment.twitch.username,
        password: environment.twitch.password
      }
    };
  }

  private setTwitchClient(): void {
    this.twitchClient = new Twitch.Client(this.twitchOptions);
  }

  private twitchClientConnect(): void {
    this.twitchClient.connect();
  }
}
