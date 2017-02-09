import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';

import Position from '../models/position';

import * as constants from '../constants';

@Injectable()
export class MeteoService {
    weatherKey: {
        [key: string]: string
    };

    constructor(private http: Http,
        private router: Router) {
        this.weatherKey = {};
    }

    static getPosError(): void {
        console.error('Unable to retrieve your location');
    }

    getPosition(callback: (p: Position) => void): void {
        navigator.geolocation
            .getCurrentPosition(callback.bind(this), MeteoService.getPosError);
    }

    getCitiesByUrl(url: string): Observable<any> {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    getCityById(id: number): Observable<any> {
        return this.http.get(constants.GEO_URL
                + 'weather?id='
                + id + '&appid='
                + constants.GEO_API_KEY)
            .map((response: Response) => response.json())
            .catch((): Observable<boolean> => {
                this.router.navigate(['meteo']);

                return Observable.of(false);
            });
    }
}
