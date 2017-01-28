import {Action} from '@ngrx/store';
import {MeteoActions} from '../actions';

import City from '../models/city';
import Meteo from '../models/meteo';

export const initialMeteoState: Meteo = {
    cities: [],
    citiesCache: []
};

export function meteoReducer(state: Meteo = initialMeteoState,
                             action: Action): Meteo {
    switch (action.type) {
        case MeteoActions.METEO_LOAD_SUCCESS: {
            return Object.assign({}, state, {cities: action.payload});
        }
        case MeteoActions.METEO_LOAD_FAILED: {
            return Object.assign({}, state, {error: action.payload});
        }
        case MeteoActions.METEO_WEATHER_SUCCESS: {
            return Object.assign({}, state, {weather: action.payload});
        }
        case MeteoActions.METEO_ADD_CACHE: {
            const citiesCache: City[] = state.citiesCache;
            citiesCache.push(action.payload);

            return Object.assign({}, state, {citiesCache});
        }
        case MeteoActions.METEO_ADD: {
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
        case MeteoActions.METEO_REMOVE: {
            return Object.assign({}, state, state.cities.splice(action.payload, 1));
        }
        case MeteoActions.METEO_HIGHLIGHT: {
            const cities: City[] = state.cities;
            const highlight: City[] = cities.map((city: City, index: number) => {
                city.isHighlight = index === action.payload ? !city.isHighlight : false;

                return city;
            });

            return Object.assign({}, state, {cities: highlight});
        }
        default:
            return state;
    }
}
