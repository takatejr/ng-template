import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from "@angular/forms";
import { CreateOfferType, OffersService } from "../offers.service";
import { ActivatedRoute } from "@angular/router";
import { map, switchAll, switchMap } from "rxjs";

@Component({
    selector: "app-take-a-look-offer",
    templateUrl: "./take-a-look-offer.component.html",
    styleUrls: ["./take-a-look-offer.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TakeALookOfferComponent {
    currentOffer: any;
    constructor(
        private http: HttpClient,
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder,
        private offersService: OffersService,
        private activeRouter: ActivatedRoute,
    ) {
        this.getSingleOffer();
    }

    getSingleOffer(): void {
        this.activeRouter.paramMap
            .pipe(
                map((params) => params.get("uuid")),
                switchMap((uuid: string | null) => {
                    return this.offersService.getSingleOffer(uuid as string);
                }),
            )
            .subscribe({
                next: (e) => {
                    this.currentOffer = e;
                    this.cdr.markForCheck();
                },
                error: (err) => {
                    console.log(err);
                },
            });
    }
}
