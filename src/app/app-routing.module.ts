import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    // {
    //     path: "dashboard",
    //     loadChildren: () => import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
    // },
    {
        path: "",
        // component: AppComponent,
        children: [
            {
                path: "offers",
                loadChildren: () => import("./pages/offers/offers.module").then((m) => m.OffersModule),
            },
        ],
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
