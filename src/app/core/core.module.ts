import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchService } from './services/twitch.service';
import { JoinComponent } from './components/join/join.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    JoinComponent
  ],
  providers: [
    TwitchService
  ],
  exports: [
    JoinComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class CoreModule { }
