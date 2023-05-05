import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { WidgetDataContentType } from "../widget-wrapper/widget-wrapper.component";

@Component({
    selector: "app-chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements WidgetDataContentType {
    data: any = {
        isLoading: true,
        isError: false,
        data: [],
    };

    @Output() isLoading = new EventEmitter();
    constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
        this.fetchData()
            .pipe(finalize(() => (this.data.isLoading = false)))
            .subscribe({
                next: (res) => {
                    //@ts-ignore
                    this.data.data = [res];
                    this.cdr.markForCheck();
                },
                error: (err) => {
                    this.data.isError = true;
                    this.cdr.markForCheck();
                },
            });
    }

    fetchData(): Observable<any> {
        return this.http.get("http://localhost:8080/v1/offer/get2");
    }
}
