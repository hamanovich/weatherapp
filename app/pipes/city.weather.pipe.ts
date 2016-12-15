import {Pipe, PipeTransform} from '@angular/core';
import {WeatherService} from '../weather/weather.service';
import {KelvinToCelsius} from '../pipes/celsius.pipe';
import * as constants from '../constants';

@Pipe({
    name: 'CityWeather',
    pure: false
})

export class CityWeather implements PipeTransform {
    weatherStore: string[];

    constructor(private weatherService: WeatherService) {
        this.weatherStore = [];
    }

    transform(value: string): string {
        if (Object.keys(this.weatherStore).indexOf(value) === -1) {
            this.weatherStore[value] = '';
            this.weatherService
                .getCities(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .subscribe(
                    city => {
                        city.main.temp = new KelvinToCelsius().transform(city.main.temp);
                        this.weatherStore[value] = `${city.name}: current temperature is ${city.main.temp}°C`;
                    },
                    error => {
                        this.weatherStore[value] = error.statusText;
                    });
        }

        return this.weatherStore[value];
    }
}