import {Pipe, PipeTransform} from '@angular/core';
import {Observable, Subscriber} from 'rxjs/Rx';
import {WeatherService} from '../weather/weather.service';
import {KelvinToCelsius} from '../pipes/celsius.pipe';
import City from '../models/city.interface';
import * as constants from '../constants';

@Pipe({
    name: 'CityWeather'
})

export class CityWeather implements PipeTransform {
    index: number = 0;
    cachedNames: string[];
    cityCache: City[] = [];
    weather: Observable<City>;

    constructor(private weatherService: WeatherService) {
    }

    transform(value: string): Observable<City> {
        this.cachedNames = this.cityCache.map(n => n.name);
        this.index = this.cachedNames.indexOf(value);

        if (this.index === -1) {
            this.weather = this.weatherService
                .getCities(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .do(city => {
                    city.main.temp = new KelvinToCelsius().transform(city.main.temp);
                    this.cityCache.push(city);
                    return city;
                })
                .map(city => `${city.name}: current temperature is ${city.main.temp}°C`);
        }
        else {
            const name = this.cityCache[this.index].name;
            const temp = this.cityCache[this.index].main.temp;

            this.weather = new Observable(
                (observer: Subscriber<City>) => {
                    observer.next(`${name}: current temperature is ${temp}°C`);
                });
        }

        return this.weather;
    }
}