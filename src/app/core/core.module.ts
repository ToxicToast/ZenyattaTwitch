import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchService } from './services/twitch.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TwitchService
  ]
})
export class CoreModule { }
