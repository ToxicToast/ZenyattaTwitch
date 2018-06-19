import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitchService } from '../../../core/services/twitch.service';
import * as moment from 'moment';



@Component({
  selector: 'zenyatta-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  twitchPayload = {
    twitchViewers: 0,
    twitchMessages: 0,
    twitchHosts: 0,
    twitchMods: 0,
    twitchSeconds: '00:00:00',
    twitchLastViewer: '',
    twitchLastMessage: '',
    twitchTitle: '',
    twitchGame: ''
  };

  private seconds: number;
  twitchArray: any[];

  constructor(
    private twitch: TwitchService
  ) {
    this.twitchPayload.twitchViewers = 0;
    this.twitchPayload.twitchMessages = 0;
    this.twitchPayload.twitchHosts = 0;
    this.twitchPayload.twitchMods = 0;
    this.twitchPayload.twitchSeconds = '00:00:00';
    this.twitchPayload.twitchLastViewer = 'n/a';
    this.twitchPayload.twitchLastMessage = 'n/a';
    this.twitchPayload.twitchTitle = 'n/a';
    this.twitchPayload.twitchGame = 'n/a';
    this.seconds = 0;
    this.twitchArray = [];
  }

  ngOnInit() {
    this.twitch.init();
    this.subscribeTo();
    this.getStreamTitle();
    this.clockTick();
  }

  ngOnDestroy() {
    this.twitch.destroy();
    this.twitchPayload.twitchViewers = 0;
    this.twitchPayload.twitchMessages = 0;
    this.twitchPayload.twitchHosts = 0;
    this.twitchPayload.twitchLastViewer = 'n/a';
    this.twitchPayload.twitchLastMessage = 'n/a';
    this.twitchPayload.twitchSeconds = '00:00:00';
    this.twitchPayload.twitchTitle = 'n/a';
    this.twitchPayload.twitchGame = 'n/a';
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
    this.twitch.getTwitchApi('channels/toxictoast', 'GET').subscribe(data => {
      this.twitchPayload.twitchTitle = data.status;
      this.twitchPayload.twitchGame = data.game;
    });
  }

  private clockTick() {
    setInterval(() => {
      this.seconds = this.seconds + 1;
      this.twitchPayload.twitchSeconds = moment.utc(this.seconds * 1000).format('HH:mm:ss');
    }, 1000);
  }
}
