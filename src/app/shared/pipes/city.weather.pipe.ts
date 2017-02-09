import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Response } from '@angular/http';

import { Store } from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

import { MeteoService } from '../../meteo/meteo.service';
import { Celsius }      from './celsius.pipe';

import City from '../../models/city';

import * as constants from '../../constants';

@Pipe({
    name: 'CityWeather',
    pure: false
})

export class CityWeather implements PipeTransform {
    constructor(private meteoService: MeteoService,
                private store: Store<fromRoot.State>,
                private cd: ChangeDetectorRef) {
    }

    transform(value: string): string {
        if (this.meteoService.weatherKey[value] === undefined) {
            this.meteoService.weatherKey[value] = '';
            this.meteoService
                .getCitiesByUrl(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .subscribe(
                    (city: City) => {
                        this.store.dispatch(new meteo.AddCacheAction(city));
                        this.meteoService.weatherKey[value] = `${city.name}: ${new Celsius().transform(city.main.temp)}°C`;
                        this.cd.markForCheck();
                    },
                    (error: Response) => {
                        this.meteoService.weatherKey[value] = error.statusText;
                    });
        }

        return this.meteoService.weatherKey[value];
    }
}
