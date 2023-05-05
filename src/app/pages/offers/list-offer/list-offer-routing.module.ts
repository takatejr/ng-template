import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListOfferComponent } from "./list-offer.component";

const routes: Routes = [
    {
        path: "",
        title: "Practice Offer",
        component: ListOfferComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListOfferRoutingModule {}
