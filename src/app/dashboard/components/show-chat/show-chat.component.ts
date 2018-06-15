import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.scss']
})
export class ShowChatComponent implements OnInit {

  @Input() messages: any[];

  constructor() { }

  ngOnInit() {
  }

}
