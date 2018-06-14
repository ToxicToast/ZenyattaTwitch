import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  @Input() channel: string;
  @Input() username: string;
  @Input() self: boolean;

  constructor() { }

  ngOnInit() {
  }

}
