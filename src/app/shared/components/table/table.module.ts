import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableComponent } from "./table.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
    declarations: [TableComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
    ],
    providers: [],
    exports: [TableComponent],
})
export class TableModule {}
