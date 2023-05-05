import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

export type CreateOfferType = {
    title: string;
    description: string;
};

export type OfferType = {
    uuid: string;
    createdAt: string;
} & CreateOfferType;

@Injectable({
    providedIn: "root",
})
export class OffersService {
    offers$ = new BehaviorSubject<OfferType[]>([]);

    constructor(private http: HttpClient) {}

    createOffer = (payload: CreateOfferType): void => {
        this.http
            .post("http://localhost:8080/v1/offers/", payload, {
                withCredentials: true,
            })
            .subscribe({
                next: (e) => {
                    console.log(e);
                },
                error: (e) => {
                    console.log(e);
                },
            });
    };

    getSingleOffer = (uuid: string): Observable<OfferType> => {
        return this.http.get<OfferType>(`http://localhost:8080/v1/offers/${uuid}`);
    };

    getOffers = (): void => {
        this.http
            .get("http://localhost:8080/v1/offers/", {
                withCredentials: true,
            })
            .subscribe({
                next: (res) => {
                    this.offers$.next(res as OfferType[]);
                },
                error: (err) => {
                    console.log(err);
                },
            });
    };
}
