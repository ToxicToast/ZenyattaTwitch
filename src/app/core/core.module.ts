import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchService } from './services/twitch.service';
import { JoinComponent } from './components/join/join.component';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    JoinComponent,
    ChatComponent
  ],
  providers: [
    TwitchService
  ],
  exports: [
    JoinComponent,
    ChatComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class CoreModule { }
