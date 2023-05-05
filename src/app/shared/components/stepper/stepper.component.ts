import { ChangeDetectionStrategy, Component, Input, TemplateRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

interface ISteps {
    label: string;
    component: TemplateRef<any>;
    form: FormGroup | null;
}

@Component({
    selector: "app-stepper",
    templateUrl: "./stepper.component.html",
    styleUrls: ["./stepper.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
    @Input() steps: ISteps[] = [];
}
