import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { OffersService } from "../offers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs";

@Component({
    selector: "app-list-offer",
    templateUrl: "./list-offer.component.html",
    styleUrls: ["./list-offer.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOfferComponent {
    offers$ = this.offersService.offers$;

    constructor(
        private http: HttpClient,
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder,
        private router: Router,
        private activeRouter: ActivatedRoute,
        private offersService: OffersService,
    ) {
        this.getAllOffers();
    }

    getAllOffers(): void {
        this.offersService.getOffers();
    }

    goToOffer(uuid: string): void {
        this.router.navigate(["/offers", uuid], {
            relativeTo: this.activeRouter,
        });
    }
}
