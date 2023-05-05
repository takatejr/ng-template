import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, ViewChild } from "@angular/core";
import { ChartComponent } from "../charts/chart.component";

export interface WidgetDataContentType {
    data: {
        isError: boolean;
        isLoading: boolean;
        data: any;
    };
}

@Component({
    selector: "app-widget-wrapper",
    templateUrl: "./widget-wrapper.component.html",
    styleUrls: ["./widget-wrapper.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent implements AfterContentInit {
    @Input() header: string = "";
    @ContentChild("componentRef") componentRef!: ElementRef;
    @ContentChildren(ChartComponent) templates: QueryList<any> | undefined;
    constructor() {
        // //@ts-ignore
        // setTimeout(() => console.log(this.componentRef?.data), 1000);
        // setTimeout(() => console.log(this.templates), 1000)
    }

    ngAfterContentInit() {
        // console.log('dziala')
        // // @ts-ignore
        // this.templates.forEach((template) => {
        //     console.log(template)
        // });
    }
}
