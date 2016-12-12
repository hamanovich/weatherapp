import {Pipe, PipeTransform} from '@angular/core';
import * as constants from '../constants';
import {WeatherService} from '../weather/weather.service';

@Pipe({
    name: 'CityWeather',
    pure: false
})

export class CityWeather implements PipeTransform {
    mapObject: any;

    constructor(private weatherService: WeatherService) {
        this.mapObject = {};
    }

    cachedNames: string[];
    temp: number;
    weather: any;

    transform(value: string): string {

        if ((Object.keys(this.mapObject).indexOf(value) === -1)) {
            this.mapObject[value] = '';
            this.weatherService.getCity(`${constants.GEO_URL}weather?q=` + value + `&appid=04d22a81627d5df2de71730e3d30221d`)
                .subscribe(
                    data => {
                        this.mapObject[value] = data.main.temp + 'K';
                    }, err => {
                        this.mapObject[value] = err.statusText;
                    });
        }
        return this.mapObject[value];
    }
}