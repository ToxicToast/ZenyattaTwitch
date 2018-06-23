import { Component, OnInit, Input } from '@angular/core';
import { ToasterService } from '@core/services/toaster.service';

@Component({
  selector: 'zenyatta-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.scss']
})
export class ConnectedComponent implements OnInit {
  @Input() address: string;
  @Input() port: number;

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.toasterService.showInfo('Connected', this.connectedAddress());
  }

  private connectedAddress(): string {
    return `${this.address}:${this.port}`;
  }

}
