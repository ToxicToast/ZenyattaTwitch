import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchService } from './services/twitch.service';
import { JoinComponent } from './components/join/join.component';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { ChatComponent } from './components/chat/chat.component';
import { PartComponent } from './components/part/part.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    JoinComponent,
    ChatComponent,
    PartComponent
  ],
  providers: [
    TwitchService
  ],
  exports: [
    JoinComponent,
    ChatComponent,
    PartComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class CoreModule { }
