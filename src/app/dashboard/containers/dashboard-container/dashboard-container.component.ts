import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../../../core/services/twitch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'zenyatta-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  twitchSubscription$: Observable<any>;

  constructor(
    private twitch: TwitchService
  ) {
    twitch.init();
    twitch.subscribeEventsTwitch();
    this.twitchSubscription$ = twitch.twitchSubscription;
    twitch.destroy();
  }

  ngOnInit() {
  }

}
