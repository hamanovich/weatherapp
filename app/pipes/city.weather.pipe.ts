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
    cachedNames: City[];
    CITY_CACHE: City[] = [];
    weather: Observable<City>;

    constructor(private weatherService: WeatherService) {
    }

    transform(value: string): Observable<City> {
        this.cachedNames = this.CITY_CACHE.map(n => n.name);

        if (this.cachedNames.indexOf(value) === -1) {
            this.weather = this.weatherService
                .getCities(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .map(city => {
                    this.CITY_CACHE.push(city);
                    return city;
                })
                .map(city => `${city.name}: current temperature is ${new KelvinToCelsius().transform(city.main.temp)}°C`);
        }
        else {
            const name = this.CITY_CACHE[this.cachedNames.indexOf(value)].name;
            const temp = new KelvinToCelsius().transform(this.CITY_CACHE[this.cachedNames.indexOf(value)].main.temp);

            this.weather = new Observable(
                (observer: Subscriber<City>) => {
                    observer.next(`${name}: current temperature is ${temp}°C`);
                });
        }

        return this.weather;
    }
}