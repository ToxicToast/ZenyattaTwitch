import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import {
  IChatContract,
  IJoinContract,
  IPartContract,
  IBanContract,
  ICheerContract,
  IClearchatContract,
  IConnectedContract,
  IConnectingContract,
  IDisconnectedContract,
  IHostedContract,
  IHostingContract,
  ILogonContract,
  IModContract,
  IRaidContract,
  IReconnectContract,
  IResubContract,
  IRitualContract,
  ISubgiftContract,
  ISubscriptionContract,
  ITimeoutContract,
  IUnhostContract
} from '@core/dataContract';

import { ITwitchOptions } from '@core/interfaces/itwitch-options';

import {
  Chat,
  Join,
  Part,
  Ban,
  Cheer,
  Clearchat,
  Connected,
  Connecting,
  Disconnected,
  Hosted,
  Hosting,
  Logon,
  Mod,
  Raid,
  Reconnect,
  Resub,
  Ritual,
  Subgift,
  Subscription,
  Timeout,
  Unhost
} from '@core/classes';

import Twitch from 'twitch-js';
import { RestService } from '@core/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  private twitchOptions: ITwitchOptions;
  twitchClient: Twitch.Client;
  twitchSubscription: Observable<any>;
  apiSubscription: Observable<any>;
  allSubscriptions: any[];
  chatArray = [];

  constructor(private restService: RestService) {}

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

  public subscribeEventsTwitch() {
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
      const partSubscription = part.getPayload().subscribe((partMessages: IPartContract) => {
        this.chatArray.push(partMessages);
        observer.next(this.chatArray);
      });
      // Ban Messages
      const ban = new Ban(this.twitchClient);
      const banSubscription = ban.getPayload().subscribe((banMessages: IBanContract) => {
        this.chatArray.push(banMessages);
        observer.next(this.chatArray);
      });
      // Cheer Messages
      const cheer = new Cheer(this.twitchClient);
      const cheerSubscription = cheer.getPayload().subscribe((cheerMessages: ICheerContract) => {
        this.chatArray.push(cheerMessages);
        observer.next(this.chatArray);
      });
      // Clearchat Messages
      const clearchat = new Clearchat(this.twitchClient);
      const clearchatSubscription = clearchat.getPayload().subscribe((clearchatMessages: IClearchatContract) => {
        this.chatArray.push(clearchatMessages);
        observer.next(this.chatArray);
      });
      // Connected Messages
      const connected = new Connected(this.twitchClient);
      const connectedSubscription = connected.getPayload().subscribe((connectedMessages: IConnectedContract) => {
        this.chatArray.push(connectedMessages);
        observer.next(this.chatArray);
      });
      // Connecting Messages
      const connecting = new Connecting(this.twitchClient);
      const connectingSubscription = connecting.getPayload().subscribe((connectingMessages: IConnectingContract) => {
        this.chatArray.push(connectingMessages);
        observer.next(this.chatArray);
      });
      // Disconnected Messages
      const disconnected = new Disconnected(this.twitchClient);
      const disconnectedSubscription = disconnected.getPayload().subscribe((disconnectedMessages: IDisconnectedContract) => {
        this.chatArray.push(disconnectedMessages);
        observer.next(this.chatArray);
      });
      // Hosted Messages
      const hosted = new Hosted(this.twitchClient);
      const hostedSubscription = hosted.getPayload().subscribe((hostedMessages: IHostedContract) => {
        this.chatArray.push(hostedMessages);
        observer.next(this.chatArray);
      });
      // Hosting Messages
      const hosting = new Hosting(this.twitchClient);
      const hostingSubscription = hosting.getPayload().subscribe((hostingMessages: IHostingContract) => {
        this.chatArray.push(hostingMessages);
        observer.next(this.chatArray);
      });
      // Logon Messages
      const logon = new Logon(this.twitchClient);
      const logonSubscription = logon.getPayload().subscribe((logonMessages: ILogonContract) => {
        this.chatArray.push(logonMessages);
        observer.next(this.chatArray);
      });
      // Mod Messages
      const mod = new Mod(this.twitchClient);
      const modSubscription = mod.getPayload().subscribe((modMessages: IModContract) => {
        this.chatArray.push(modMessages);
        observer.next(this.chatArray);
      });
      // Raid Messages
      const raid = new Raid(this.twitchClient);
      const raidSubscription = raid.getPayload().subscribe((raidMessages: IRaidContract) => {
        this.chatArray.push(raidMessages);
        observer.next(this.chatArray);
      });
      // Reconnect Messages
      const reconnect = new Reconnect(this.twitchClient);
      const reconnectSubscription = reconnect.getPayload().subscribe((reconnectMessages: IReconnectContract) => {
        this.chatArray.push(reconnectMessages);
        observer.next(this.chatArray);
      });
      // Resub Messages
      const resub = new Resub(this.twitchClient);
      const resubSubscription = resub.getPayload().subscribe((resubMessages: IResubContract) => {
        this.chatArray.push(resubMessages);
        observer.next(this.chatArray);
      });
      // Ritual Messages
      const ritual = new Ritual(this.twitchClient);
      const ritualSubscription = ritual.getPayload().subscribe((ritualMessages: IRitualContract) => {
        this.chatArray.push(ritualMessages);
        observer.next(this.chatArray);
      });
      // Subgift Messages
      const subgift = new Subgift(this.twitchClient);
      const subgiftSubscription = subgift.getPayload().subscribe((subgiftMessages: ISubgiftContract) => {
        this.chatArray.push(subgiftMessages);
        observer.next(this.chatArray);
      });
      // Subscription Messages
      const subscription = new Subscription(this.twitchClient);
      const subscriptionSubscription = subscription.getPayload().subscribe((subscriptionMessages: ISubscriptionContract) => {
        this.chatArray.push(subscriptionMessages);
        observer.next(this.chatArray);
      });
      // Timeout Messages
      const timeout = new Timeout(this.twitchClient);
      const timeoutSubscription = timeout.getPayload().subscribe((timeoutMessages: ITimeoutContract) => {
        this.chatArray.push(timeoutMessages);
        observer.next(this.chatArray);
      });
      // Unhost Messages
      const unhost = new Unhost(this.twitchClient);
      const unhostSubscription = unhost.getPayload().subscribe((unhostMessages: IUnhostContract) => {
        this.chatArray.push(unhostMessages);
        observer.next(this.chatArray);
      });
      // Push Subscriptions to Array for Unsubscription later
      this.allSubscriptions.push(chatSubscription);
      this.allSubscriptions.push(joinSubscription);
      this.allSubscriptions.push(partSubscription);
      this.allSubscriptions.push(banSubscription);
      this.allSubscriptions.push(cheerSubscription);
      this.allSubscriptions.push(clearchatSubscription);
      this.allSubscriptions.push(connectedSubscription);
      this.allSubscriptions.push(connectingSubscription);
      this.allSubscriptions.push(disconnectedSubscription);
      this.allSubscriptions.push(hostedSubscription);
      this.allSubscriptions.push(hostingSubscription);
      this.allSubscriptions.push(logonSubscription);
      this.allSubscriptions.push(modSubscription);
      this.allSubscriptions.push(raidSubscription);
      this.allSubscriptions.push(reconnectSubscription);
      this.allSubscriptions.push(resubSubscription);
      this.allSubscriptions.push(ritualSubscription);
      this.allSubscriptions.push(subgiftSubscription);
      this.allSubscriptions.push(subscriptionSubscription);
      this.allSubscriptions.push(timeoutSubscription);
      this.allSubscriptions.push(unhostSubscription);
    });

    return this.twitchSubscription;
  }

  public getTwitchApi(endpoint?: string, method?) {
    this.apiSubscription = new Observable(observer => {
      if (method === 'GET') {
        this.restService.getTwitchApi(endpoint).subscribe(data => {
          observer.next(data);
        });
      }
      // console.error('api call');
    });
    this.allSubscriptions.push(this.apiSubscription);
    return this.apiSubscription;
  }

  private setTwitchSettings(): void {
    this.twitchOptions = {
      options: {
        debug: false
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
