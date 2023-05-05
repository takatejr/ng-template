import { NgModule } from "@angular/core";
import { TakeALookOfferComponent } from "./take-a-look-offer.component";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../../../shared/components/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TakeALookOfferRoutingModule } from "./take-a-look-offer-routing.module";

@NgModule({
    declarations: [TakeALookOfferComponent],
    imports: [CommonModule, TakeALookOfferRoutingModule, InputComponent, ReactiveFormsModule],
    providers: [],
    exports: [TakeALookOfferComponent],
})
export class TakeALookOfferModule {}
