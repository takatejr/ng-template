import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { WidgetWrapperComponent } from "./widget-wrapper.component";

@NgModule({
    declarations: [WidgetWrapperComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatStepperModule],
    providers: [],
    exports: [WidgetWrapperComponent],
})
export class WidgetWrapperModule {}
