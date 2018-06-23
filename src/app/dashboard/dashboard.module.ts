import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { DashboardContainerComponent } from '@dashboard/containers/dashboard-container/dashboard-container.component';

import { CoreModule } from '@core/core.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ShowChatComponent } from './components/show-chat/show-chat.component';
import { ChangeTitleGameComponent } from './components/change-title-game/change-title-game.component';
import { StreamEventsComponent } from './components/stream-events/stream-events.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [
    DashboardContainerComponent,
    StatisticsComponent,
    ShowChatComponent,
    ChangeTitleGameComponent,
    StreamEventsComponent
  ]
})
export class DashboardModule { }
