import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { StepperModule } from "./shared/components/stepper/stepper.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { TableModule } from "./shared/components/table/table.module";
import { HttpClientModule } from "@angular/common/http";
import { WidgetWrapperModule } from "./shared/components/widget-wrapper/stepper.module";
import { ChartModule } from "./shared/components/charts/stepper.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        StepperModule,
        ReactiveFormsModule,
        MatInputModule,
        TableModule,
        WidgetWrapperModule,
        ChartModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
