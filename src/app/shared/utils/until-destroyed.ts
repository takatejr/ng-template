import { MonoTypeOperatorFunction, Subject, takeUntil } from "rxjs";
import { ChangeDetectorRef, inject, ViewRef } from "@angular/core";

export const untilDestroyed = () => {
    const subject = new Subject<void>();

    const viewRef = inject(ChangeDetectorRef) as ViewRef;

    viewRef.onDestroy(() => {
        subject.next();
        subject.complete();
    });

    return subject.asObservable();
};
