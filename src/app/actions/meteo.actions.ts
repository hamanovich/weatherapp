import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Response} from "@angular/http";

import City from '../models/city';

@Injectable()
export class MeteoActions {
    static METEO_LOAD: string = '[METEO] LOAD';

    Load(url: string): Action {
        return {
            type: MeteoActions.METEO_LOAD,
            payload: url
        };
    }

    static METEO_LOAD_SUCCESS: string = '[METEO] LOAD SUCCESS';

    LoadSuccess(cities: City[]): Action {
        return {
            type: MeteoActions.METEO_LOAD_SUCCESS,
            payload: cities
        };
    }

    static METEO_LOAD_FAILED: string = '[METEO] LOAD FAILED';

    LoadFailed(error: Response): Action {
        return {
            type: MeteoActions.METEO_LOAD_FAILED,
            payload: error
        };
    }

    static METEO_WEATHER: string = '[METEO] WEATHER';

    Weather(url: string): Action {
        return {
            type: MeteoActions.METEO_WEATHER,
            payload: url
        };
    }

    static METEO_WEATHER_SUCCESS: string = '[METEO] WEATHER SUCCESS';

    WeatherSuccess(description: string): Action {
        return {
            type: MeteoActions.METEO_WEATHER_SUCCESS,
            payload: description
        };
    }

    static METEO_ADD: string = '[METEO] ADD';

    Add(city: string): Action {
        return {
            type: MeteoActions.METEO_ADD,
            payload: city
        };
    }

    static METEO_ADD_CACHE: string = '[METEO] ADD CACHE';

    AddCache(city: City): Action {
        return {
            type: MeteoActions.METEO_ADD_CACHE,
            payload: city
        };
    }

    static METEO_REMOVE: string = '[METEO] REMOVE';

    Remove(index: number): Action {
        return {
            type: MeteoActions.METEO_REMOVE,
            payload: index
        };
    }

    static METEO_HIGHLIGHT: string = '[METEO] HIGHLIGHT';

    Highlight(index: number): Action {
        return {
            type: MeteoActions.METEO_HIGHLIGHT,
            payload: index
        };
    }
}