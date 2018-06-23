import { Component, OnInit, Input } from '@angular/core';
import { ToasterService } from '@core/services/toaster.service';

@Component({
  selector: 'zenyatta-connecting',
  templateUrl: './connecting.component.html',
  styleUrls: ['./connecting.component.scss']
})
export class ConnectingComponent implements OnInit {
  @Input() address: string;
  @Input() port: number;

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.toasterService.showInfo('Connecting', this.connectedAddress());
  }

  private connectedAddress(): string {
    return `${this.address}:${this.port}`;
  }

}
