import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitchService } from '@core/services/twitch.service';
import * as moment from 'moment';
import { environment } from '@env/environment';
import { IApiChannel, IApiStream } from '@core/dataContract';



@Component({
  selector: 'zenyatta-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  twitchPayload = {
    twitchChannel: '',
    twitchViewers: 0,
    twitchMessages: 0,
    twitchHosts: 0,
    twitchMods: 0,
    twitchSeconds: '00:00:00',
    twitchLastViewer: 'n/a',
    twitchLastMessage: 'n/a',
    twitchTitle: 'n/a',
    twitchGame: 'n/a',
    twitchFollowers: 0,
    twitchViews: 0,
    twitchLogo: 'n/a',
    twitchAge: 'n/a',
    twitchPartner: false,
    twitchOnline: false
  };

  private seconds: number;
  twitchArray: any[];

  constructor(
    private twitch: TwitchService
  ) {
    this.twitchPayload = {
      twitchChannel: 'n/a',
      twitchViewers: 0,
      twitchMessages: 0,
      twitchHosts: 0,
      twitchMods: 0,
      twitchSeconds: '00:00:00',
      twitchLastViewer: 'n/a',
      twitchLastMessage: 'n/a',
      twitchTitle: 'n/a',
      twitchGame: 'n/a',
      twitchFollowers: 0,
      twitchViews: 0,
      twitchLogo: 'n/a',
      twitchAge: 'n/a',
      twitchPartner: false,
      twitchOnline: false
    };
    this.seconds = 0;
    this.twitchArray = [];
  }

  ngOnInit() {
    this.twitch.init();
    this.subscribeTo();
    this.getStreamTitle();
    this.getStreamStatus();
    this.clockTick();
  }

  ngOnDestroy() {
    this.twitch.destroy();
    this.twitchPayload = {
      twitchChannel: 'n/a',
      twitchViewers: 0,
      twitchMessages: 0,
      twitchHosts: 0,
      twitchMods: 0,
      twitchSeconds: '00:00:00',
      twitchLastViewer: 'n/a',
      twitchLastMessage: 'n/a',
      twitchTitle: 'n/a',
      twitchGame: 'n/a',
      twitchFollowers: 0,
      twitchViews: 0,
      twitchLogo: 'n/a',
      twitchAge: 'n/a',
      twitchPartner: false,
      twitchOnline: false
    };
    this.twitchArray = [];
  }

  subscribeTo() {
    this.twitch.subscribeEventsTwitch().subscribe((sub: any[]) => {
      const viewers = sub.filter(viewersFilter => viewersFilter.type === 'join');
      const parts = sub.filter(partFilter => partFilter.type === 'part');
      const messages = sub.filter(messagesFilter => messagesFilter.type === 'chat');
      const hosts = sub.filter(hostsFilter => hostsFilter.type === 'hosted');
      const mod = sub.filter(hostsFilter => hostsFilter.type === 'mod');
      //
      this.twitchPayload.twitchViewers = viewers.length - parts.length;
      this.twitchPayload.twitchMessages = messages.length;
      this.twitchPayload.twitchHosts = hosts.length;
      this.twitchPayload.twitchMods = mod.length;
      //
      if (viewers.length > 0) {
        if (viewers[(viewers.length - 1)].self !== true) {
          this.twitchPayload.twitchLastViewer = viewers[(viewers.length - 1)].username;
        }
      }
      if (messages.length > 0) {
        if (messages[(messages.length - 1)].self !== true) {
          this.twitchPayload.twitchLastMessage = messages[(messages.length - 1)].userstate.username;
        }
      }
      //
      this.twitchArray = sub;
    });
  }

  private getStreamTitle() {
    const channel = environment.twitch.username;
    this.twitch.getTwitchApi(`channels/${channel}`, 'GET').subscribe((data: IApiChannel) => {
      this.twitchPayload.twitchChannel = `#${channel}`;
      this.twitchPayload.twitchTitle = data.status;
      this.twitchPayload.twitchGame = data.game;
      this.twitchPayload.twitchFollowers = data.followers;
      this.twitchPayload.twitchLogo = data.logo;
      this.twitchPayload.twitchAge = moment.duration(moment().diff(moment(data.created_at))).humanize();
      this.twitchPayload.twitchViews = data.views;
      this.twitchPayload.twitchPartner = data.partner;
    });
  }

  private getStreamStatus() {
    const channel = environment.twitch.username;
    this.twitch.getTwitchApi(`streams/${channel}`, 'GET').subscribe((data: IApiStream) => {
      if (data.stream) {
        this.twitchPayload.twitchOnline = true;
      }
    });
  }

  private clockTick() {
    setInterval(() => {
      this.seconds = this.seconds + 1;
      this.twitchPayload.twitchSeconds = moment.utc(this.seconds * 1000).format('HH:mm:ss');
    }, 1000);
  }
}
