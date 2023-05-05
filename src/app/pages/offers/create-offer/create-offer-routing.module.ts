import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateOfferComponent } from "./create-offer.component";

const routes: Routes = [
    {
        path: "",
        title: "Create Practice Offer",
        component: CreateOfferComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateOfferRoutingModule {}
