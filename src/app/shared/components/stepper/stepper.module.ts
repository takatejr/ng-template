import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { StepperComponent } from "./stepper.component";

@NgModule({
    declarations: [StepperComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatStepperModule],
    providers: [],
    exports: [StepperComponent],
})
export class StepperModule {}
