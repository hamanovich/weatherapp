import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import City from "../models/city.interface";

@Injectable()
export class WeatherService {
    storage: City[];
    weatherStore: City[];
    weatherKey: {
        [key: string]: string
    };

    constructor(private http: Http) {
        this.storage = [];
        this.weatherStore = [];
        this.weatherKey = {};
    }

    private getPosError(): void {
        console.error('Unable to retrieve your location');
    }

    getPosition(callback: (p: Position) => void): void {
        navigator.geolocation
            .getCurrentPosition(callback.bind(this), this.getPosError);
    }

    getCities(url: string) {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    storeCities(value: City[]): void {
        this.storage = value;
    }

    getStore(): City[] {
        return this.storage;
    }

    getWeatherStore(): City[] {
        return this.weatherStore;
    }
}