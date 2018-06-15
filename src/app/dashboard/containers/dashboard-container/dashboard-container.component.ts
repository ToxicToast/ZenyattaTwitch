import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitchService } from '../../../core/services/twitch.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'zenyatta-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  twitchViewers: number;
  twitchMessages: number;
  twitchHosts: number;
  twitchArray: any[];

  constructor(
    private twitch: TwitchService
  ) {
    this.twitchViewers = 0;
    this.twitchMessages = 0;
    this.twitchHosts = 0;
    this.twitchArray = [];
  }

  ngOnInit() {
    this.twitch.init();
    this.subscribeTo();
  }

  ngOnDestroy() {
    this.twitch.destroy();
    this.twitchViewers = 0;
    this.twitchMessages = 0;
    this.twitchHosts = 0;
    this.twitchArray = [];
  }

  subscribeTo() {
    this.twitch.subscribeEventsTwitch().subscribe((sub: any[]) => {
      const viewers = sub.filter(viewersFilter => viewersFilter.type === 'join');
      const parts = sub.filter(partFilter => partFilter.type === 'part');
      const messages = sub.filter(messagesFilter => messagesFilter.type === 'chat');
      const hosts = sub.filter(hostsFilter => hostsFilter.type === 'hosted');
      //
      this.twitchViewers = viewers.length - parts.length;
      this.twitchMessages = messages.length;
      this.twitchHosts = hosts.length;
      //
      this.twitchArray = sub;
    });
  }
}
