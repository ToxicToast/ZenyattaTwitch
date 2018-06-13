import { Component } from '@angular/core';
import { TwitchService } from './core/services/twitch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'zenyatta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zenyatta';

  twitchSubscription: Observable<any>;

  constructor(
    private twitch: TwitchService
  ) {
    twitch.init();
    twitch.subscribeTwitch();
    this.twitchSubscription = twitch.twitchSubscription;
    twitch.destroy();
  }
}
