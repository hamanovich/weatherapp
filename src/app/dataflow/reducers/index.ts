import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromMeteo from './meteo.reducer';
import * as fromGeo from './geo.reducer';

import { Response } from '@angular/http';

import City from '../../models/city';
import FilterColumns from '../../models/filter.columns';
import Coords from '../../models/coords';

export interface State {
    meteo: fromMeteo.State;
    geo: fromGeo.State;
}

const reducers = {
    meteo: fromMeteo.reducer,
    geo: fromGeo.reducer
};

const devReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
    return devReducer(state, action);
}

export const getMeteoState = (state: State) => state.meteo;

export const getWeatherCities = createSelector(getMeteoState, fromMeteo.getCities);
export const getWeatherYourCity = createSelector(getMeteoState, fromMeteo.getYourCity);
export const getWeatherDescription = createSelector(getMeteoState, fromMeteo.getWeather);
export const getWeatherErrors = createSelector(getMeteoState, fromMeteo.getErrors);
export const getWeatherFiltersColumns = createSelector(getMeteoState, fromMeteo.getFiltersColumns);
export const getWeatherFiltersMeasure = createSelector(getMeteoState, fromMeteo.getFiltersMeasure);
export const getWeatherFilterToggle = createSelector(getMeteoState, fromMeteo.getFiltersToggle);

export const getGeoState = (state: State) => state.geo;
export const getGeoCoords = createSelector(getGeoState, fromGeo.getCoords);
