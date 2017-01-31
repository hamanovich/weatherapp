import { Action } from '@ngrx/store';
import { Response } from "@angular/http";

import * as meteo from '../actions/meteo.actions';

import City from '../../models/city';

export interface State {
    cities?: City[];
    citiesCache?: City[];
    weather?: string;
    error?: Response;
}

const initialState: State = {
    cities: null,
    citiesCache: [],
    weather: '',
    error: null
};

export function reducer(state: State = initialState, action: Action): State {
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

        case meteo.ActionTypes.WEATHER_FAIL: {
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


            const cities: City[] = state.cities;
            const highlight: City[] = cities.map((city: City, index: number) => {
                return Object.assign({}, city, {
                   isHighlight: index === action.payload ? !city.isHighlight : false
                });
            });

            return Object.assign({}, state, {cities: highlight})
        }

        default: {
            return state;
        }
    }
}

export const getCities = (state: State) => state.cities;
export const getWeather = (state: State) => state.weather;
export const getErrors = (state: State) => state.error;