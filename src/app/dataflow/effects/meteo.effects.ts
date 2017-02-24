import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import * as meteo from '../actions/meteo.actions';
import * as geo from '../actions/geo.actions';

import { Store, Action } from '@ngrx/store';
import * as fromRoot from '../reducers';

import { MeteoService } from '../../meteo/meteo.service'

import City from '../../models/city';
import Filters from "../../models/filters";
import Coords from '../../models/coords';
import CurrentPosition from '../../models/position';

import { mathMethods } from '../../shared/utils';

@Injectable()
export class MeteoEffects {
    constructor(private actions$: Actions,
                private store: Store<fromRoot.State>,
                private meteoService: MeteoService) {
    }

    @Effect() getPosition$: Observable<{type: string}> = this.actions$
        .ofType(geo.ActionTypes.GET_POSITION)
        .switchMap(() => new Observable((observer: Observer<Action>) => {
                navigator.geolocation.getCurrentPosition(
                    (position: CurrentPosition) => {
                        observer.next(new geo.GetPositionSuccessAction(position));
                        observer.complete();
                    },
                    (error: PositionError) => observer.error(new geo.GetPositionFailAction(error))
                );
            })
        );

    @Effect() getAllCities$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.LOAD)
        .map(toPayload)
        .switchMap((position: Coords) => {
            return Observable.forkJoin(
                this.meteoService.getCitiesByLocation(position),
                this.meteoService.getCityByLocation(position)
            )
                .map((data: any) => {
                   if (!data[0]) {
                       return new meteo.LoadFailAction({
                           statusText: 'Something goes wrong. Try again!'
                       });
                   }

                    return new meteo.LoadSuccessAction(data);
                })
        })
        .catch((error: Response) => Observable.of({
                type: meteo.ActionTypes.LOAD_FAIL,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            })
        );

    @Effect() setFilters$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.FILTER)
        .map(toPayload)
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
