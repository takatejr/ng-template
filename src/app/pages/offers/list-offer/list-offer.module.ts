import { NgModule } from "@angular/core";
import { ListOfferComponent } from "./list-offer.component";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../../../shared/components/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ListOfferRoutingModule } from "./list-offer-routing.module";

@NgModule({
    declarations: [ListOfferComponent],
    imports: [CommonModule, ListOfferRoutingModule, InputComponent, ReactiveFormsModule],
    providers: [],
    exports: [ListOfferComponent],
})
export class ListOfferModule {}
