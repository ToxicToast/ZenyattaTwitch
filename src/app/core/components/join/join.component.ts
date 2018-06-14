import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zenyatta-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  private emitPayload = {
    channel: '',
    username: ''
  };
  @Input() channel: string;
  @Input() username: string;
  @Input() self: boolean;

  @Output() timeoutUser = new EventEmitter<any>();
  @Output() banUser = new EventEmitter<any>();
  @Output() modUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.emitPayload.username = this.username;
    this.emitPayload.channel = this.channel;
  }

  onTimeoutUser() {
    this.timeoutUser.emit(this.emitPayload);
    console.error(this.emitPayload);
  }

}
