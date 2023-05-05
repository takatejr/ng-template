import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from "@angular/forms";
import { CreateOfferType, OffersService } from "../offers.service";

@Component({
    selector: "app-create-offer",
    templateUrl: "./create-offer.component.html",
    styleUrls: ["./create-offer.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateOfferComponent {
    @Output() isLoading = new EventEmitter();
    createOfferForm = this.fb.group({
        title: this.fb.nonNullable.control("", [Validators.required]),
        description: this.fb.nonNullable.control("", [Validators.required]),
    });

    constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private fb: FormBuilder, private offersService: OffersService) {}

    createOffer(): void {
        this.offersService.createOffer(this.createOfferForm.value as CreateOfferType);
    }
}
