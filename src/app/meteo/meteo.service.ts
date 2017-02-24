import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import Coords from '../models/coords';

import { GEO_API_KEY, NUMBER_OF_CITIES } from '../constants';

export type WeatherKey = {
    [key: string]: string
};

@Injectable()
export class MeteoService {
    weatherKey: WeatherKey = {};

    constructor(private http: Http) {
    }

    getCityByName(name: string): Observable<any> {
        const search: URLSearchParams = new URLSearchParams();

        search.append('q', name);
        search.append('appid', GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search
        });

        return this.httpRequest('/weather', options);
    }

    getCitiesByLocation(coords: Coords): Observable<any> {
        const search: URLSearchParams = new URLSearchParams();
        search.append('lat', String(coords.latitude));
        search.append('lon', String(coords.longitude));
        search.append('cnt', String(NUMBER_OF_CITIES));
        search.append('appid', GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search
        });

        return this.httpRequest('/find', options);
    }

    getCityByLocation(coords: Coords): Observable<any> {
        if (!coords) return Observable.of(false);

        const search: URLSearchParams = new URLSearchParams();

        search.append('lat', String(coords.latitude));
        search.append('lon', String(coords.longitude));
        search.append('appid', GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search
        });

        return this.httpRequest('/weather', options);
    }

    getCityById(id: number): Observable<any> {
        const search: URLSearchParams = new URLSearchParams();

        search.append('id', String(id));
        search.append('appid', GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search
        });

        return this.httpRequest('/weather', options);
    }

    httpRequest(url: string, options: RequestOptions): Observable<any> {
        return this.http.request(url, options)
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }
}
