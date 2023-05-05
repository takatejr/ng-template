import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map } from "rxjs";

import { NavigationEnd, Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class UtilsService {
    currentUrl$ = new BehaviorSubject<string>("");

    constructor(private router: Router) {
        this.setupUrlListener();
        this.currentUrl$.subscribe(console.log);
    }

    private setupUrlListener = (): void => {
        this.router.events
            .pipe(
                // takeUntil(this.untilDestroyed$),
                filter((ev) => ev instanceof NavigationEnd),
                map((ne) => (ne as NavigationEnd)?.urlAfterRedirects),
            )
            .subscribe((url) => this.currentUrl$.next(url));
    };
    waitForAnimations = () => {
        return;
    };
}
