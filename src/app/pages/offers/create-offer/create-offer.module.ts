import { NgModule } from "@angular/core";
import { CreateOfferComponent } from "./create-offer.component";
import { CommonModule } from "@angular/common";
import { CreateOfferRoutingModule } from "./create-offer-routing.module";
import { InputComponent } from "../../../shared/components/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [CreateOfferComponent],
    imports: [CommonModule, CreateOfferRoutingModule, InputComponent, ReactiveFormsModule],
    providers: [],
    exports: [CreateOfferComponent],
})
export class CreateOfferModule {}
