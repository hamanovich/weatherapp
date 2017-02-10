import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import Position from '../models/position';
import Coords from '../models/coords';

import * as constants from '../constants';

@Injectable()
export class MeteoService {
    weatherKey: {
        [key: string]: string
    };

    constructor(private http: Http) {
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
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }

    getCityByLocation(coords: Coords): Observable<any> {
        if (coords) {
            return this.http.get(constants.GEO_URL
                + 'weather?lat=' + coords.latitude
                + '&lon=' + coords.longitude
                + '&appid=' + constants.GEO_API_KEY)
                .map((response: Response) => response.json())
                .catch(() => Observable.of(false));
        } else {
            return Observable.of(false);
        }
    }

    getCityById(id: number): Observable<any> {
        return this.http.get(constants.GEO_URL
            + 'weather?id=' + id
            + '&appid=' + constants.GEO_API_KEY)
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }
}
