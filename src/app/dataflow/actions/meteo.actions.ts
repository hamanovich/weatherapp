import { Action } from '@ngrx/store';
import { Response } from "@angular/http";

import City from '../../models/city';
import Coords from '../../models/coords';
import Filters from "../../models/filters";
import ResponseError from '../../models/response.error';

export const ActionTypes = {
    LOAD: '[METEO] LOAD',
    LOAD_SUCCESS: '[METEO] LOAD SUCCESS',
    LOAD_FAIL: '[METEO] LOAD FAIL',
    UPDATE: '[METEO] UPDATE',
    FILTER: '[METEO] FILTER',
    ADD: '[METEO] ADD',
    ADD_CACHE: '[METEO] ADD CACHE',
    REMOVE: '[METEO] REMOVE',
    HIGHLIGHT: '[METEO] HIGHLIGHT'
};

export class LoadAction implements Action {
    type: string = ActionTypes.LOAD;

    constructor(public payload?: Coords) {
    }
}

export class LoadSuccessAction implements Action {
    type: string = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: any) {
    }
}

export class LoadFailAction implements Action {
    type: string = ActionTypes.LOAD_FAIL;

    constructor(public payload: Response | ResponseError) {
    }
}

export class UpdateAction implements Action {
    type: string = ActionTypes.UPDATE;

    constructor(public payload: City[]) {
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
    | FilterAction
    | AddAction
    | AddCacheAction
    | RemoveAction
    | HightlightAction;
