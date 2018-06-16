import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitchService } from '../../../core/services/twitch.service';
import * as moment from 'moment';



@Component({
  selector: 'zenyatta-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  private seconds: number;
  twitchViewers: number;
  twitchMessages: number;
  twitchHosts: number;
  twitchMods: number;
  twitchSeconds: string;
  twitchLastViewer: string;
  twitchLastMessage: string;
  twitchArray: any[];

  constructor(
    private twitch: TwitchService
  ) {
    this.twitchViewers = 0;
    this.twitchMessages = 0;
    this.twitchHosts = 0;
    this.twitchMods = 0;
    this.twitchSeconds = '';
    this.twitchLastViewer = 'n/a';
    this.twitchLastMessage = 'n/a';
    this.seconds = 0;
    this.twitchArray = [];
  }

  ngOnInit() {
    this.twitch.init();
    this.subscribeTo();
    this.clockTick();
  }

  ngOnDestroy() {
    this.twitch.destroy();
    this.twitchViewers = 0;
    this.twitchMessages = 0;
    this.twitchHosts = 0;
    this.twitchArray = [];
    this.twitchLastViewer = 'n/a';
    this.twitchLastMessage = 'n/a';
    this.twitchSeconds = '';
  }

  subscribeTo() {
    this.twitch.subscribeEventsTwitch().subscribe((sub: any[]) => {
      const viewers = sub.filter(viewersFilter => viewersFilter.type === 'join');
      const parts = sub.filter(partFilter => partFilter.type === 'part');
      const messages = sub.filter(messagesFilter => messagesFilter.type === 'chat');
      const hosts = sub.filter(hostsFilter => hostsFilter.type === 'hosted');
      const mod = sub.filter(hostsFilter => hostsFilter.type === 'mod');
      //
      this.twitchViewers = viewers.length - parts.length;
      this.twitchMessages = messages.length;
      this.twitchHosts = hosts.length;
      this.twitchMods = mod.length;
      //
      if (viewers.length > 0) {
        if (viewers[(viewers.length - 1)].self !== true) {
          this.twitchLastViewer = viewers[(viewers.length - 1)].username;
        }
      }
      if (messages.length > 0) {
        if (messages[(messages.length - 1)].self !== true) {
          this.twitchLastMessage = messages[(messages.length - 1)].userstate.username;
        }
      }
      //
      this.twitchArray = sub;
    });
  }

  private clockTick() {
    setInterval(() => {
      this.seconds = this.seconds + 1;
      this.twitchSeconds = moment.utc(this.seconds * 1000).format('HH:mm:ss');
    }, 1000);
  }
}
