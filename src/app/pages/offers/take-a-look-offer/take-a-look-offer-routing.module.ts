import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TakeALookOfferComponent } from "./take-a-look-offer.component";

const routes: Routes = [
    {
        path: "",
        title: "Practice Offer",
        component: TakeALookOfferComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TakeALookOfferRoutingModule {}
