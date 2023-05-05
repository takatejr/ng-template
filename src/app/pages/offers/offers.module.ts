import { NgModule } from "@angular/core";
import { OffersComponent } from "./offers.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { OffersRoutingModule } from "./offers-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
    declarations: [OffersComponent],
    imports: [CommonModule, RouterOutlet, OffersRoutingModule, MatButtonModule, MatRippleModule],
    providers: [],
    exports: [OffersComponent],
})
export class OffersModule {}
