import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { ITwitchOptions } from '../interfaces/itwitch-options';
import { IChatContract } from '../dataContract/ichat-contract';
import { IJoinContract } from '../dataContract/ijoin-contract';

import { Chat } from '../classes/chat';
import { Join } from '../classes/join';
import { Part } from '../classes/part';
import { Ban } from '../classes/ban';
import { Cheer } from '../classes/cheer';

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

  public subscribeEventsTwitch(): void {
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
      // Part Messages
      const part = new Part(this.twitchClient);
      const partSubscription = part.getPayload().subscribe((partMessages: IJoinContract) => {
        this.chatArray.push(partMessages);
        observer.next(this.chatArray);
      });
      // Ban Messages
      const ban = new Ban(this.twitchClient);
      const banSubscription = ban.getPayload().subscribe((banMessages) => {
        this.chatArray.push(banMessages);
        observer.next(this.chatArray);
      });
      // Cheer Messages
      const cheer = new Ban(this.twitchClient);
      const cheerSubscription = cheer.getPayload().subscribe((cheerMessages) => {
        this.chatArray.push(cheerMessages);
        observer.next(this.chatArray);
      });
      // Clearchat Messages
      const clearchat = new Ban(this.twitchClient);
      const clearchatSubscription = clearchat.getPayload().subscribe((clearchatMessages) => {
        this.chatArray.push(clearchatMessages);
        observer.next(this.chatArray);
      });
      // Connected Messages
      const connected = new Ban(this.twitchClient);
      const connectedSubscription = connected.getPayload().subscribe((connectedMessages) => {
        this.chatArray.push(connectedMessages);
        observer.next(this.chatArray);
      });
      // Connecting Messages
      const connecting = new Ban(this.twitchClient);
      const connectingSubscription = connecting.getPayload().subscribe((connectingMessages) => {
        this.chatArray.push(connectingMessages);
        observer.next(this.chatArray);
      });
      // Disconnected Messages
      // Hosted Messages
      // Hosting Messages
      // Logon Messages
      // Mod Messages
      // Raid Messages
      // Reconnect Messages
      // Resub Messages
      // Ritual Messages
      // Subgift Messages
      // Subscription Messages
      // Timeout Messages
      // Unhost Messages
      // Push Subscriptions to Array for Unsubscription later
      this.allSubscriptions.push(chatSubscription);
      this.allSubscriptions.push(joinSubscription);
      this.allSubscriptions.push(partSubscription);
      this.allSubscriptions.push(banSubscription);
      this.allSubscriptions.push(cheerSubscription);
      this.allSubscriptions.push(clearchatSubscription);
      this.allSubscriptions.push(connectedSubscription);
      this.allSubscriptions.push(connectingSubscription);
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
      channels: environment.twitch.channels,
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
