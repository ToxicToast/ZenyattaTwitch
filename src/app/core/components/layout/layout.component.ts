import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zenyatta-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() showSidebar = true;

  constructor() { }

  ngOnInit() { }

}
