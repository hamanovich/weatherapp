import {Action} from '@ngrx/store';
import {Response} from "@angular/http";

import * as meteo from '../actions/meteo.actions';

import City from '../../models/city';

export interface State {
    cities?: City[];
    citiesCache?: City[];
    weather?: string;
    error?: Response;
}

const initialState: State = {
    cities: [],
    citiesCache: [],
    weather: '',
    error: null
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
            console.log('success weather')
            return Object.assign({}, state, {weather: action.payload});
        }

        case meteo.ActionTypes.ADD_CACHE: {
            const citiesCache: City[] = state.citiesCache;
            citiesCache.push(action.payload);

            return Object.assign({}, state, {citiesCache});
        }

        case meteo.ActionTypes.ADD: {
            const cities: City[] = state.cities;
            const citiesCache: City[] = state.citiesCache;
            let weatherStoreValue: City[];

            if ((cities.filter((city: City) => city.name.toLowerCase() === action.payload.toLowerCase())).length === 0) {
                weatherStoreValue = citiesCache.filter((city: City) => {
                    return city.name.toLowerCase() === action.payload.toLowerCase();
                });

                cities.push(...weatherStoreValue);
            }

            return Object.assign({}, state, {cities});
        }

        case meteo.ActionTypes.REMOVE: {
            return Object.assign({}, state, state.cities.splice(action.payload, 1));
        }

        case meteo.ActionTypes.HIGHLIGHT: {
            const cities: City[] = state.cities;
            const highlight: City[] = cities.map((city: City, index: number) => {
                city.isHighlight = index === action.payload ? !city.isHighlight : false;

                return city;
            });

            return Object.assign({}, state, {cities: highlight});
        }

        default: {
            return state;
        }
    }
}

export const getCities = (state: State) => state.cities;
