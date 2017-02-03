import { Action } from '@ngrx/store';
import { Response } from "@angular/http";

import * as geo from '../actions/geo.actions';

import Coords from '../../models/coords';

export interface State {
    coords?: Coords;
    error?: Response;
}

const initialState: State = {
    coords: null,
    error: null
};

export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case geo.ActionTypes.GET_POSITION_SUCCESS: {
            return Object.assign({}, state, {
                coords: {
                    latitude: action.payload.coords.latitude,
                    longitude: action.payload.coords.longitude
                }
            });
        }

        case geo.ActionTypes.GET_POSITION_FAIL: {
            return Object.assign({}, state, {error: action.payload});
        }

        default: {
            return state;
        }
    }
}

export const getCoords = (state: State) => state.coords;
