import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ImprovementsService } from "./shared/services/improvements/improvements.service";
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, RouterStateSnapshot } from "@angular/router";
import { filter, map, takeUntil } from "rxjs";
import { untilDestroyed } from "./shared/utils/until-destroyed";
import { UtilsService } from "./shared/services/utils/utils.service";

const tableColumns = [
    {
        title: "Tytuł",
        key: "title",
        action: (...args: any) => {
            console.log(args);
        },
    },
    {
        title: "Opis",
        key: "description",
        action: (...args: any) => {
            console.log(args);
        },
    },
];

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    tableColumns = tableColumns;
    tableData = [];

    stepGroup1 = this.fb.group({
        title: this.fb.control("", [Validators.maxLength(40), Validators.required]),
        description: this.fb.control("", [Validators.maxLength(600), Validators.required]),
    });
    stepGroup2 = this.fb.group({
        lastName: this.fb.control("", [Validators.maxLength(40), Validators.required]),
    });

    constructor(
        private fb: FormBuilder,
        private improvementsService: ImprovementsService,
        private router: Router,
        private activeRouter: ActivatedRoute,
        private utilsService: UtilsService,
    ) {
        // this.getImprovements();
    }

    redirectToCreatePracticeOffer = () => {
        this.router.navigate(["offers"], {
            relativeTo: this.activeRouter,
        });
    };

    defaultPage = () => {
        this.router.navigateByUrl("");
    };

    szczal() {
        this.improvementsService.szczal().subscribe();
        // this.improvementsService.szczal2().subscribe();
    }

    getImprovements() {
        this.improvementsService.getImprovements().subscribe({
            next: (data) => (this.tableData = data),
            error: (err) => console.log(err),
        });
    }
}
