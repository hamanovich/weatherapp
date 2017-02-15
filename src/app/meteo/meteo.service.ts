import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import Coords from '../models/coords';

import * as constants from '../constants';

@Injectable()
export class MeteoService {
    weatherKey: {[key: string]: string} = {};

    constructor(private http: Http) {
        //CORS origin policy
        /*const headers = new Headers({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': 'true',
         'Access-Control-Allow-Methods': 'GET, POST',
         'Access-Control-Allow-Headers': 'Access-Control-Allow-Credentials, Access-Control-Allow-Headers,
         Access-Control-Allow-Methods, Access-Control-Allow-Origin, Content-Type'
         });*/
    }

    getCityByName(name: string): Observable<any> {
        const url: string = constants.GEO_URL + 'weather';
        const params: URLSearchParams = new URLSearchParams();
        params.append('q', name);
        params.append('appid', constants.GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search: params,
            url
        });
        const request: Request = new Request(options);

        return this.http.request(request)
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }

    getCitiesByLocation(coords: Coords): Observable<any> {
        const url: string = constants.GEO_URL + 'find';
        const params: URLSearchParams = new URLSearchParams();
        params.append('lat', String(coords.latitude));
        params.append('lon', String(coords.longitude));
        params.append('cnt', String(constants.NUMBER_OF_CITIES));
        params.append('appid', constants.GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search: params,
            url
        });
        const request: Request = new Request(options);

        return this.http.request(request)
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }

    getCityByLocation(coords: Coords): Observable<any> {
        if (!coords) return Observable.of(false);

        const url: string = constants.GEO_URL + 'weather';
        const params: URLSearchParams = new URLSearchParams();
        params.append('lat', String(coords.latitude));
        params.append('lon', String(coords.longitude));
        params.append('appid', constants.GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search: params,
            url
        });
        const request: Request = new Request(options);

        return this.http.request(request)
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }

    getCityById(id: number): Observable<any> {
        const url: string = constants.GEO_URL + 'weather';
        const params: URLSearchParams = new URLSearchParams();
        params.append('id', String(id));
        params.append('appid', constants.GEO_API_KEY);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get,
            search: params,
            url
        });
        const request: Request = new Request(options);

        return this.http.request(request)
            .map((response: Response) => response.json())
            .catch(() => Observable.of(false));
    }
}
