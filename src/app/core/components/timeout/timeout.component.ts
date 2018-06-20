import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {

  @Input() channel: string;
  @Input() username: string;
  @Input() reason: string;
  @Input() duration: number;

  constructor() { }

  ngOnInit() {
  }

}
