import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnInit {

  @Input() game: string;
  @Input() title: string;
  @Input() channel: string;
  @Input() logo: string;
  @Input() followers: number;

  constructor() { }

  ngOnInit() {
  }

}
