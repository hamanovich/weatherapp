import {Pipe, PipeTransform} from '@angular/core';
import {Response} from '@angular/http';

import {WeatherService} from '../meteo/weather/weather.service';
import {KelvinToCelsius} from './celsius.pipe';

import City from '../models/city.interface';

import * as constants from '../constants';

@Pipe({
    name: 'CityWeather',
    pure: false
})

export class CityWeather implements PipeTransform {
    constructor(private weatherService: WeatherService) {
    }

    transform(value: string): string {
        if (this.weatherService.weatherKey[value] === undefined) {
            this.weatherService.weatherKey[value] = '';
            this.weatherService
                .getCities(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .subscribe(
                    (city: City) => {
                        this.weatherService.weatherStore.push(city);
                        this.weatherService.weatherKey[value] = `${city.name}: ${new KelvinToCelsius().transform(city.main.temp)}°C`;
                    },
                    (error: Response) => {
                        this.weatherService.weatherKey[value] = error.statusText;
                    });
        }

        return this.weatherService.weatherKey[value];
    }
}
