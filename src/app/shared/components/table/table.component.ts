import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { BehaviorSubject } from "rxjs";
import { FormControl, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";

interface ITableColumns {
    title: string;
    key: string;
    action: ([...args]) => void;
}

interface IColumnsDefault {
    literalColumns: string[];
    colsWithActions: ITableColumns[];
}

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @Input() data: unknown[] = [];

    columns: IColumnsDefault = {
        literalColumns: [],
        colsWithActions: [],
    };
    dataSource: any = null;
    paginateCounter$ = new BehaviorSubject<number[]>([1]);
    currentPageSize$ = new BehaviorSubject<number>(0);
    hasNextPage$ = new BehaviorSubject<boolean>(false);
    hasPreviousPage$ = new BehaviorSubject<boolean>(false);
    paginationControl = new FormControl(0, Validators.required);

    @Input() set setColumns(columns: ITableColumns[]) {
        const literalColumns = columns.map(({ title }) => title);
        const colsWithActions = columns;

        this.columns = {
            literalColumns,
            colsWithActions,
        };
    }

    ngAfterViewInit(): void {
        this.fillTableData(this.data);
    }

    detectTableChanges(event: { length: number; pageSize: number }): void {
        const pageDecimal = event.length / event.pageSize;
        const pages = pageDecimal % 1 > 0 ? Number(pageDecimal.toString().split(".")[0]) + 1 : Number(pageDecimal.toString().split(".")[0]);
        this.paginateCounter$.next(Array.from({ length: pages }, (_, i) => i + 1));

        if (this.currentPageSize$.value !== event.pageSize) {
            this.currentPageSize$.next(event.pageSize);
            this.paginationControl.setValue(1);
            this.selectPage(1);
        }

        this.hasNextPage$.next(!this.paginator?.hasNextPage());
        this.hasPreviousPage$.next(!this.paginator?.hasPreviousPage());
    }

    selectPage(page: number): void {
        const paginator = this.paginator;

        while (paginator!.pageIndex > page - 1) {
            if (paginator?.hasPreviousPage()) {
                paginator.previousPage();
            }
        }

        while (paginator!.pageIndex < page - 1) {
            if (paginator?.hasNextPage()) {
                paginator.nextPage();
            }
        }
    }

    nextPage(): void {
        const paginator = this.paginator;

        if (paginator?.hasNextPage()) {
            paginator.nextPage();
            this.paginationControl.setValue(paginator.pageIndex + 1);
        }
    }

    previousPage(): void {
        const paginator = this.paginator;

        if (paginator?.hasPreviousPage()) {
            paginator.previousPage();
            this.paginationControl.setValue(paginator.pageIndex + 1);
        }
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource!.filter = filterValue.trim().toLowerCase();

        if (this.dataSource?.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    private fillTableData<T>(data: T[]): void {
        this.dataSource = new MatTableDataSource(data) as MatTableDataSource<T>;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
