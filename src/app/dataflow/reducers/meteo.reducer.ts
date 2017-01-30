import {Action} from '@ngrx/store';
import {Response} from "@angular/http";

import * as meteo from '../actions/meteo.actions';

import City from '../../models/city';

export interface State {
    cities?: City[];
    citiesCache?: City[];
    weather?: string;
    error?: Response;
    selectedIndex?: number;
}

const initialState: State = {
    cities: [],
    citiesCache: [],
    weather: '',
    error: null,
    selectedIndex: null
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case meteo.ActionTypes.LOAD_SUCCESS: {
            return Object.assign({}, state, {cities: action.payload});
        }

        case meteo.ActionTypes.LOAD_FAIL: {
            return Object.assign({}, state, {error: action.payload});
        }

        case meteo.ActionTypes.WEATHER_SUCCESS: {
            return Object.assign({}, state, {weather: action.payload});
        }

        case meteo.ActionTypes.ADD_CACHE: {
            return Object.assign({}, state, {
                citiesCache: state.citiesCache.concat([action.payload])
            });
        }

        case meteo.ActionTypes.ADD: {
            let fromCache: City[] = state.citiesCache
                .filter((city: City) => city.name.toLowerCase() === action.payload.toLowerCase());

            return Object.assign({}, state, {
                cities: state.cities.concat(fromCache)
            });
        }

        case meteo.ActionTypes.REMOVE: {
            return Object.assign({}, state, {
                cities: [
                    ...state.cities.slice(0, action.payload),
                    ...state.cities.slice(action.payload + 1)
                ]
            });
        }

        case meteo.ActionTypes.HIGHLIGHT: {
            return Object.assign({}, state, {
                selectedIndex: action.payload
            });
        }

        default: {
            return state;
        }
    }
}

export const getCities = (state: State) => state.cities;
