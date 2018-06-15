import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { DashboardContainerComponent } from '@dashboard/containers/dashboard-container/dashboard-container.component';

import { CoreModule } from '@core/core.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ShowChatComponent } from './components/show-chat/show-chat.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [
    DashboardContainerComponent,
    StatisticsComponent,
    ShowChatComponent
  ]
})
export class DashboardModule { }
