import { Component, OnInit, Input } from '@angular/core';
import { IUserState } from '@core/dataContract/iuser-state';


@Component({
  selector: 'zenyatta-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() channel: string;
  @Input() userstate: IUserState;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

  get username(): string {
    return this.userstate.username;
  }

  get usercolor(): string {
    let color = this.userstate.color;
    if (color === '') {
      color = '#000000';
    }
    return color;
  }

}
