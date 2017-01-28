import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

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

    getCities(url: string): Observable<any> {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }
}
