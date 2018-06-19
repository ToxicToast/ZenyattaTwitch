import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TwitchService } from '@core/services/twitch.service';
import { RestService } from '@core/services/rest.service';
import { JoinComponent } from '@core/components/join/join.component';
import { ChatComponent } from '@core/components/chat/chat.component';
import { PartComponent } from '@core/components/part/part.component';
import { HostedComponent } from '@core/components/hosted/hosted.component';
import { HostingComponent } from '@core/components/hosting/hosting.component';
import { LayoutComponent } from '@core/components/layout/layout.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    JoinComponent,
    ChatComponent,
    PartComponent,
    HostedComponent,
    HostingComponent,
    LayoutComponent
  ],
  providers: [
    TwitchService,
    RestService
  ],
  exports: [
    JoinComponent,
    ChatComponent,
    PartComponent,
    HostedComponent,
    HostingComponent,
    LayoutComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class CoreModule { }
