import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    constructor(private http: Http) {
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
                .map((response: Response) => response.json().list)
                .map((val) => {
                    return {
                        cities: val,
                        city: val[0]
                    }
                })
                .publishReplay(1)
                .refCount();
    }

    public getCity(url: string) {

        return this.http.get(url)
            .map((response: Response) => response.json())
    }

}