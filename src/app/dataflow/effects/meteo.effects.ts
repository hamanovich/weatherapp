import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as meteo from '../actions/meteo.actions';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

import { MeteoService } from '../../meteo/meteo.service'

import City from '../../models/city';
import Filters from "../../models/filters";
import Coords from '../../models/coords';

import { mathMethods } from '../../shared/utils';

@Injectable()
export class MeteoEffects {
    constructor(private actions$: Actions,
                private store: Store<fromRoot.State>,
                private meteoService: MeteoService) {
    }

    @Effect() getCities$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.LOAD)
        .map((action: Action) => action.payload)
        .switchMap((url: string) => this.meteoService.getCitiesByUrl(url)
            .map((cities: {list: City[]}) => {
                if (!cities) {
                    return new meteo.LoadFailAction({
                        statusText: 'Something goes wrong. Try again!'
                    });
                }

                return new meteo.LoadSuccessAction(cities.list);
            })
            .catch((error: Response) => Observable.of({
                type: meteo.ActionTypes.LOAD_FAIL,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
            .retry(2)
        );

    @Effect() getYourCity$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.LOAD_ONE)
        .map((action: Action) => action.payload)
        .switchMap((coords: Coords) => this.meteoService.getCityByLocation(coords)
            .map((city: City) => new meteo.LoadOneSuccessAction(city))
            .catch((error: Response) => Observable.of({
                type: meteo.ActionTypes.LOAD_FAIL,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
        );

    @Effect() setFilters$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.FILTER)
        .map((action: Action) => action.payload)
        .switchMap((filters: Filters) => this.store.select(fromRoot.getWeatherCities)
            .take(1)
            .map((cities: City[]) => {
                const citiesLength: number = cities.length;
                const rows: string | number =
                    filters.rows === 'all' || Number(filters.rows) > citiesLength
                        ? citiesLength
                        : filters.rows;
                const temperatureSplit: string[] = filters.temperature.split(' ');
                const temperatureSign: string = temperatureSplit[0];
                const temperatureValue: number = Number(temperatureSplit[1]);

                let citiesVisible: City[] = [];
                let citiesHidden: City[] = [];

                cities.map((city: City) => {
                    const temperatureRange: boolean = mathMethods[temperatureSign](city.main.temp, temperatureValue);

                    if (temperatureRange) {
                        citiesVisible.push(city);
                    } else {
                        citiesHidden.push(city);
                    }

                    return city;
                });

                citiesHidden = citiesHidden.concat(citiesVisible.slice(Number(rows)))
                    .map((city: City) => Object.assign({}, city, {hidden: true}));
                citiesVisible = citiesVisible.slice(0, Number(rows))
                    .map((city: City) => Object.assign({}, city, {hidden: false}));

                return new meteo.UpdateAction([
                    ...citiesVisible,
                    ...citiesHidden
                ]);
            })
            .catch((error: Response) => Observable.of({
                type: meteo.ActionTypes.LOAD_FAIL,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
        );
}
