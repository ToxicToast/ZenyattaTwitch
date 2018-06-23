import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TwitchService } from '@core/services/twitch.service';
import { environment } from '@env/environment.prod';

@Component({
  selector: 'zenyatta-change-title-game',
  templateUrl: './change-title-game.component.html',
  styleUrls: ['./change-title-game.component.scss']
})
export class ChangeTitleGameComponent implements OnInit {

  @Input() title: string;
  @Input() game: string;
  @Output() newTitle = new EventEmitter<string>();
  @Output() newGame = new EventEmitter<string>();

  constructor(private twitch: TwitchService) { }

  ngOnInit() { }


  onSave(values) {
    const channel = environment.twitch.username;
    const { game, title } = values;
    const payload = {
      channel: {
        status: title,
        game
      }
    };
    this.twitch.getTwitchApi(`channels/${channel}`, 'PUT', payload).subscribe(data => {
      console.error(data);
    });
  }
}
