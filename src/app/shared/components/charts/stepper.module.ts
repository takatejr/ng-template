import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { ChartComponent } from "./chart.component";

@NgModule({
    declarations: [ChartComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatStepperModule],
    providers: [],
    exports: [ChartComponent],
})
export class ChartModule {}
