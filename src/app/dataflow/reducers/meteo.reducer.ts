import { Action } from '@ngrx/store';
import { Response } from "@angular/http";

import * as meteo from '../actions/meteo.actions';

import City from '../../models/city';
import Filters from '../../models/filters';
import FilterColumns from '../../models/filter.columns';

export interface State {
    yourCity?: City;
    cities?: City[];
    citiesCache?: City[];
    weather?: string;
    error?: Response;
    filters: Filters;
}

const initialState: State = {
    yourCity: [],
    cities: [],
    citiesCache: [],
    weather: '',
    error: null,
    filters: {
        columns: {
            coords: true,
            temp: true,
            pressure: true,
            humidity: true,
            wind: true,
            overall: true
        },
        temperature: '',
        rows: null,
        measure: 'Kelvin',
        toggle: false,
        cityName: ''
    }
};

export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case meteo.ActionTypes.LOAD_SUCCESS: {
            const payload = action.payload;
            const allCities: City[] = payload[0].list;
            const yourCity: City = payload[1];
            const cities: City[] = allCities.map((city: City) =>
                Object.assign({}, city, {
                    hidden: false
                })
            );

            return Object.assign({}, state, { yourCity, cities });
        }

        case meteo.ActionTypes.LOAD_FAIL: {
            return Object.assign({}, state, { error: action.payload });
        }

        case meteo.ActionTypes.UPDATE: {
            return Object.assign({}, state, { cities: action.payload });
        }

        case meteo.ActionTypes.FILTER: {
            return Object.assign({}, state, {
                filters: action.payload
            });
        }

        case meteo.ActionTypes.ADD_CACHE: {
            const payload: City = Object.assign({}, action.payload, {
                hidden: false
            });

            return Object.assign({}, state, {
                citiesCache: state.citiesCache.concat([payload])
            });
        }

        case meteo.ActionTypes.ADD: {
            const fromCache: City[] = state.citiesCache
                .filter((city: City) => city.name.toLowerCase() === action.payload.toLowerCase());

            return Object.assign({}, state, {
                cities: state.cities ? state.cities.concat(fromCache) : fromCache
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
            const highlight: City[] = cities.map((city: City, index: number) =>
                Object.assign({}, city, {
                    isHighlight: index === action.payload ? !city.isHighlight : false
                })
            );

            return Object.assign({}, state, { cities: highlight });
        }

        default: {
            return state;
        }
    }
}

export const getYourCity = (state: State) => state.yourCity;
export const getCities = (state: State) => state.cities;
export const getErrors = (state: State) => state.error;
export const getFiltersColumns = (state: State) => state.filters['columns'];
export const getFiltersMeasure = (state: State) => state.filters['measure'];
export const getFiltersToggle = (state: State) => state.filters['toggle'];
