import { Component, OnInit, Input } from '@angular/core';
import { ToasterService } from '@core/services/toaster.service';

@Component({
  selector: 'zenyatta-disconnected',
  templateUrl: './disconnected.component.html',
  styleUrls: ['./disconnected.component.scss']
})
export class DisconnectedComponent implements OnInit {

  @Input() reason: string;

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.toasterService.showWarning('Disconnected', this.reason);
  }

}
