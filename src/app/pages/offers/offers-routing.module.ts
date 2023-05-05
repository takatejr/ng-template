import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OffersComponent } from "./offers.component";

const routes: Routes = [
    {
        path: "",
        component: OffersComponent,
        title: "Main Menu",
        data: { animation: "HomePage" },
        children: [
            {
                path: "create",
                loadChildren: () => import("./create-offer/create-offer.module").then((m) => m.CreateOfferModule),
                data: { animation: "AboutPage" },
            },
            {
                path: "list",
                loadChildren: () => import("./list-offer/list-offer.module").then((m) => m.ListOfferModule),
                data: { animation: "AboutPage" },
            },
            {
                path: ":uuid",
                loadChildren: () => import("./take-a-look-offer/take-a-look-offer.module").then((m) => m.TakeALookOfferModule),
                data: { animation: "AboutPage" },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OffersRoutingModule {}
