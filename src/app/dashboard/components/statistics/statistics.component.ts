import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'zenyatta-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() viewers: number;
  @Input() messages: number;
  @Input() hosts: number;
  @Input() mods: number;
  @Input() seconds: string;

  constructor() { }

  ngOnInit() {

  }

}
