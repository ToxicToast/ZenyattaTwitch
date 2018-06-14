import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-hosted',
  templateUrl: './hosted.component.html',
  styleUrls: ['./hosted.component.scss']
})
export class HostedComponent implements OnInit {

  @Input() channel: string;
  @Input() username: string;
  @Input() viewers: number;
  @Input() autohost: boolean;

  constructor() { }

  ngOnInit() {
  }

}
