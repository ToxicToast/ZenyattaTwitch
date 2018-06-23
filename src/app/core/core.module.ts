import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TwitchService } from '@core/services/twitch.service';
import { RestService } from '@core/services/rest.service';
import { ToasterService } from '@core/services/toaster.service';
import { JoinComponent } from '@core/components/join/join.component';
import { ChatComponent } from '@core/components/chat/chat.component';
import { PartComponent } from '@core/components/part/part.component';
import { HostedComponent } from '@core/components/hosted/hosted.component';
import { HostingComponent } from '@core/components/hosting/hosting.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { ConnectingComponent } from '@core/components/connecting/connecting.component';
import { ConnectedComponent } from '@core/components/connected/connected.component';
import { LogonComponent } from '@core/components/logon/logon.component';

import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    JoinComponent,
    ChatComponent,
    PartComponent,
    HostedComponent,
    HostingComponent,
    LayoutComponent,
    ConnectingComponent,
    ConnectedComponent,
    LogonComponent
  ],
  providers: [
    TwitchService,
    RestService,
    ToasterService
  ],
  exports: [
    JoinComponent,
    ChatComponent,
    PartComponent,
    HostedComponent,
    HostingComponent,
    ConnectingComponent,
    LayoutComponent,
    ConnectedComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LogonComponent
  ]
})
export class CoreModule { }
