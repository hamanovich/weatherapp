import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as meteo from '../actions/meteo.actions';

import {MeteoService} from '../../meteo/meteo.service'

import City from '../../models/city';

@Injectable()
export class MeteoEffects {
    constructor(private actions$: Actions,
                private meteoService: MeteoService) {
    }

    @Effect() getCities$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.LOAD)
        .map((action: Action) => action.payload)
        .switchMap((url: string) => this.meteoService.getCities(url)
            .map((cities: {list: City[]}) => new meteo.LoadSuccessAction(cities.list))
            .catch((error: Response) => Observable.of({
                type: meteo.ActionTypes.LOAD_FAIL,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
        );

    @Effect() getWeather$: Observable<{type: string}> = this.actions$
        .ofType(meteo.ActionTypes.WEATHER)
        .map((action: Action) => action.payload)
        .switchMap((url: string) => this.meteoService.getCities(url)
            .map((weather: {weather: [{description: string}]}) => new meteo.WeatherSuccessAction(weather.weather[0].description))
            .catch((error: Response) => Observable.of({
                type: meteo.ActionTypes.WEATHER_FAIL,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
        );
}
