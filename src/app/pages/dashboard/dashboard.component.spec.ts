import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DashboardComponent } from "./dashboard.component";

describe("AppComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [DashboardComponent],
        }).compileComponents();
    });

    it("should create the app", () => {
        const fixture = TestBed.createComponent(DashboardComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'ng'`, () => {
        const fixture = TestBed.createComponent(DashboardComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("ng");
    });

    it("should render title", () => {
        const fixture = TestBed.createComponent(DashboardComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".content span")?.textContent).toContain("ng app is running!");
    });
});
