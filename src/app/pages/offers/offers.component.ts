import { ChangeDetectionStrategy, Component } from "@angular/core";
import { distinctUntilChanged, map, take } from "rxjs";
import { ActivatedRoute, ChildrenOutletContexts, Router } from "@angular/router";
import { UtilsService } from "../../shared/services/utils/utils.service";
import { OffersService } from "./offers.service";
import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";
import { untilDestroyed } from "../../shared/utils/until-destroyed";
// [@routeAnimations]="getRouteAnimationData()"

export const slideInAnimation = trigger("routeAnimations", [
    // transition('HomePage <=> AboutPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //         style({
    //             position: 'absolute',
    //             top: 0,
    //             left: 0,
    //             width: '100%'
    //         })
    //     ], {
    //         optional: true
    //     }),
    //     query(':enter', [
    //         style({ left: '-100%' })
    //     ]),
    //     query(':leave', animateChild(), {
    //         optional: true
    //     }),
    //     group([
    //         query(':leave', [
    //             animate('300ms ease-out', style({ left: '100%' }))
    //         ], {
    //             optional: true
    //         }),
    //         query(':enter', [
    //             animate('300ms ease-out', style({ left: '0%' }))
    //         ], {
    //             optional: true
    //         }),
    //     ]),
    // ]),
    transition("* <=> *", [
        style({ position: "relative" }),
        query(
            ":enter, :leave",
            [
                style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                }),
            ],
            {
                optional: true,
            },
        ),
        query(":enter", [style({ left: "-10%" })], {
            optional: true,
        }),
        query(":leave", animateChild(), {
            optional: true,
        }),
        group([
            query(":leave", [animate("800ms ease-out", style({ left: "10%", opacity: 0 }))], {
                optional: true,
            }),
            query(":enter", [animate("800ms ease-out", style({ left: "0%" }))], {
                optional: true,
            }),
            query("@*", animateChild(), {
                optional: true,
            }),
        ]),
    ]),
]);

@Component({
    selector: "app-offers",
    templateUrl: "./offers.component.html",
    styleUrls: ["./offers.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        slideInAnimation,
        // trigger("inOutPaneAnimation", [
        //     transition(":enter", [
        //         style({ opacity: 0, transform: "translateX(-10%)" }),
        //         animate(
        //             "250ms ease-in-out",
        //             style({ opacity: 1, transform: "translateX(0)" }),
        //         ),
        //     ]),
        //     transition(":leave", [
        //         query(':leave', animateChild()),
        //         style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
        //         query(':leave', animateChild()),
        //         animate(
        //             "2000ms ease-in-out",
        //             style({ opacity: 0, transform: "translateX(-10%)" }),
        //         ),
        //     ]),
        // ]),
    ],
})
export class OffersComponent {
    constructor(
        private router: Router,
        private utilsService: UtilsService,
        private contexts: ChildrenOutletContexts,
        private activeRouter: ActivatedRoute,
        private offersService: OffersService,
    ) {}

    getRouteAnimationData() {
        return this.contexts.getContext("primary")?.route?.snapshot?.data?.["animation"];
    }

    goToOffer = (uuid: string): void => {
        this.router.navigate(["/offers/", uuid], {
            relativeTo: this.activeRouter,
        });
    };

    goToCreateOffer = () => {
        this.router.navigate(["offers/create"]);
    };

    goToList = () => {
        this.router.navigate(["offers"]);
    };
}
