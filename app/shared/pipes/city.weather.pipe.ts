import {Pipe, PipeTransform} from '@angular/core';
import {Response} from '@angular/http';

import {MeteoService} from '../../meteo/meteo.service';
import {Celsius} from './celsius.pipe';

import City from '../../models/city.interface';

import * as constants from '../../constants';

@Pipe({
    name: 'CityWeather',
    pure: false
})

export class CityWeather implements PipeTransform {
    constructor(private meteoService: MeteoService) {
    }

    transform(value: string): string {
        if (this.meteoService.weatherKey[value] === undefined) {
            this.meteoService.weatherKey[value] = '';
            this.meteoService
                .getCities(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .subscribe(
                    (city: City) => {
                        this.meteoService.weatherStore.push(city);
                        this.meteoService.weatherKey[value] = `${city.name}: ${new Celsius().transform(city.main.temp)}°C`;
                    },
                    (error: Response) => {
                        this.meteoService.weatherKey[value] = error.statusText;
                    });
        }

        return this.meteoService.weatherKey[value];
    }
}
