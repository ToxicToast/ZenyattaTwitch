import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchService } from '@core/services/twitch.service';
import { JoinComponent } from '@core/components/join/join.component';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { ChatComponent } from '@core/components/chat/chat.component';
import { PartComponent } from '@core/components/part/part.component';
import { HostedComponent } from '@core/components/hosted/hosted.component';
import { HostingComponent } from '@core/components/hosting/hosting.component';
import { LayoutComponent } from '@core/components/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
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
    TwitchService
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
