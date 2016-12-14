import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import City from "../models/city.interface";

@Injectable()
export class WeatherService {
    storage: City[];

    constructor(private http: Http) {
        this.storage = [];
    }

    private getPosError(): void {
        console.error('Unable to retrieve your location');
    }

    public getPosition(callback: (p: Position) => void): void {
        navigator.geolocation
            .getCurrentPosition(callback.bind(this), this.getPosError);
    }

    public getCities(url: string) {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    public storeCities(value: City[]): void {
        this.storage.push(...value);
    }

    public updateStore(value: City[]): void {
        this.storage = value;
    }

    public getStore(): City[] {
        return this.storage;
    }
}