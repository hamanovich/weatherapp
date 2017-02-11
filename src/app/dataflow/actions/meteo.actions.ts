import { Action } from '@ngrx/store';
import { Response } from "@angular/http";

import City from '../../models/city';
import Filters from "../../models/filters";
import Coords from '../../models/city';

export const ActionTypes = {
    LOAD: '[METEO] LOAD',
    LOAD_SUCCESS: '[METEO] LOAD SUCCESS',
    LOAD_FAIL: '[METEO] LOAD FAIL',
    LOAD_ONE: '[METEO] LOAD ONE',
    LOAD_ONE_SUCCESS: '[METEO] LOAD ONE SUCCESS',
    LOAD_ONE_FAIL: '[METEO] LOAD ONE FAIL',
    UPDATE: '[METEO] UPDATE',
    WEATHER: '[METEO] WEATHER',
    WEATHER_SUCCESS: '[METEO] WEATHER SUCCESS',
    WEATHER_FAIL: '[METEO] WEATHER FAIL',
    FILTER: '[METEO] FILTER',
    ADD: '[METEO] ADD',
    ADD_CACHE: '[METEO] ADD CACHE',
    REMOVE: '[METEO] REMOVE',
    HIGHLIGHT: '[METEO] HIGHLIGHT'
};

export class LoadAction implements Action {
    type: string = ActionTypes.LOAD;

    constructor(public payload: string) {
    }
}

export class LoadSuccessAction implements Action {
    type: string = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: City[]) {
    }
}

export class LoadFailAction implements Action {
    type: string = ActionTypes.LOAD_FAIL;

    constructor(public payload: Response) {
    }
}

export class LoadOneAction implements Action {
    type: string = ActionTypes.LOAD_ONE;

    constructor(public payload: Coords) {
    }
}

export class LoadOneSuccessAction implements Action {
    type: string = ActionTypes.LOAD_ONE_SUCCESS;

    constructor(public payload: City) {
    }
}

export class LoadOneFailAction implements Action {
    type: string = ActionTypes.LOAD_ONE_FAIL;

    constructor(public payload: Response) {
    }
}

export class UpdateAction implements Action {
    type: string = ActionTypes.UPDATE;

    constructor(public payload: City[]) {
    }
}

export class WeatherAction implements Action {
    type: string = ActionTypes.WEATHER;

    constructor(public payload: string) {
    }
}

export class WeatherSuccessAction implements Action {
    type: string = ActionTypes.WEATHER_SUCCESS;

    constructor(public payload: string) {
    }
}

export class WeatherFailAction implements Action {
    type: string = ActionTypes.WEATHER_FAIL;

    constructor(public payload: string) {
    }
}

export class FilterAction implements Action {
    type: string = ActionTypes.FILTER;

    constructor(public payload: Filters) {
    }
}

export class AddAction implements Action {
    type: string = ActionTypes.ADD;

    constructor(public payload: string) {
    }
}

export class AddCacheAction implements Action {
    type: string = ActionTypes.ADD_CACHE;

    constructor(public payload: City) {
    }
}

export class RemoveAction implements Action {
    type: string = ActionTypes.REMOVE;

    constructor(public payload: number) {
    }
}

export class HightlightAction implements Action {
    type: string = ActionTypes.HIGHLIGHT;

    constructor(public payload: number) {
    }
}

export type Actions
    = LoadAction
    | LoadSuccessAction
    | LoadFailAction
    | UpdateAction
    | WeatherAction
    | WeatherSuccessAction
    | FilterAction
    | AddAction
    | AddCacheAction
    | RemoveAction
    | HightlightAction;
