import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';

import {MeteoActions} from '../actions/meteo.actions';

import {MeteoService} from '../meteo/meteo.service'

import City from '../models/city';

@Injectable()
export class MeteoEffects {
    constructor(private actions$: Actions,
                private meteoService: MeteoService,
                private meteoActions: MeteoActions) {
    }

    @Effect() getCities$: Observable<{type: string}> = this.actions$
        .ofType(MeteoActions.METEO_LOAD)
        .map((action: Action) => action.payload)
        .switchMap((url: string) => this.meteoService.getCities(url)
            .map((cities: {list: City[]}) => this.meteoActions.LoadSuccess(cities.list))
            .catch((error: Response) => Observable.of({
                type: MeteoActions.METEO_LOAD_FAILED,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
        );

    @Effect() getWeather$: Observable<{type: string}> = this.actions$
        .ofType(MeteoActions.METEO_WEATHER)
        .map((action: Action) => action.payload)
        .switchMap((url: string) => this.meteoService.getCities(url)
            .map((weather: {weather: [{description: string}]}) => this.meteoActions.WeatherSuccess(weather.weather[0].description))
            .catch((error: Response) => Observable.of({
                type: MeteoActions.METEO_LOAD_FAILED,
                payload: {
                    status: error.status,
                    statusText: error.statusText
                }
            }))
        );
}
