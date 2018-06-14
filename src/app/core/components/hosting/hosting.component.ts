import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {

  @Input() channel: string;
  @Input() target: string;
  @Input() viewers: number;

  constructor() { }

  ngOnInit() {
  }

}
