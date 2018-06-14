import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  @Input() channel: string;
  @Input() username: string;
  @Input() self: boolean;

  constructor() { }

  ngOnInit() {}

}
