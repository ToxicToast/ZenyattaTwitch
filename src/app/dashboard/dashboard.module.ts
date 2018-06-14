import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { DashboardContainerComponent } from '@dashboard/containers/dashboard-container/dashboard-container.component';

import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [
    DashboardContainerComponent
  ]
})
export class DashboardModule { }
