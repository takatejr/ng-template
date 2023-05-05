import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ImprovementsService {
    constructor(private http: HttpClient) {}

    getImprovements(): Observable<any | HttpErrorResponse> {
        return this.http.get("http://localhost:3000/improvements", {
            withCredentials: true,
        });
    }

    postImprovements(): Observable<any> {
        return this.http.post(
            "http://localhost:3000/improvements",
            {},
            {
                withCredentials: true,
            },
        );
    }

    szczal(): Observable<any> {
        return this.http.post(
            "http://localhost:8080/v1/auth/login",
            {
                login: "takate",
                password: "takate",
                token: "takate",
            },
            {
                withCredentials: true,
            },
        );
    }

    szczal2(): Observable<any> {
        return this.http.get("http://localhost:8080/v1/auth/asyncfn", { withCredentials: true });
    }

    updateImprovements(payload: any): Observable<any> {
        return this.http.patch(`http://localhost:3000/improvements/${payload.uuid}`, payload, {
            withCredentials: true,
        });
    }

    deleteImprovements(payload: any): Observable<any> {
        return this.http.patch(`http://localhost:3000/improvements/${payload.uuid}`, payload, {
            withCredentials: true,
        });
    }
}
