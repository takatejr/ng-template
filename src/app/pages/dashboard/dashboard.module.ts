import { NgModule } from "@angular/core";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [DashboardComponent],
    imports: [DashboardRoutingModule, MatButtonModule],
    providers: [],
})
export class DashboardModule {}
