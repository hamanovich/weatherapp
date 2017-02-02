import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromMeteo from './meteo.reducer';
import * as fromGeo from './geo.reducer';

export interface State {
    meteo: fromMeteo.State;
    geo: fromGeo.State;
}

const reducers = {
    meteo: fromMeteo.reducer,
    geo: fromGeo.reducer
};

const devReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const prodReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return devReducer(state, action);
}

export const getMeteoState = (state: State) => state.meteo;

export const getWeatherCities = createSelector(getMeteoState, fromMeteo.getCities);
export const getWeatherDescription = createSelector(getMeteoState, fromMeteo.getWeather);
export const getWeatherErrors = createSelector(getMeteoState, fromMeteo.getErrors);
export const getWeatherFilters = createSelector(getMeteoState, fromMeteo.getFilters);
export const getWeatherFiltersColumns = createSelector(getMeteoState, fromMeteo.getFiltersColumns);

export const getGeoState = (state: State) => state.geo;
export const getGeoCoords = createSelector(getGeoState, fromGeo.getCoords);
