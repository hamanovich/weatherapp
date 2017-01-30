import {createSelector} from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

import City from '../../models/city';

import * as fromMeteo from './meteo.reducer';

export interface State {
    meteo: fromMeteo.State;
}

const reducers = {
    meteo: fromMeteo.reducer
};

const devReducer: ActionReducer<State> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
    return devReducer(state, action);
}

export const getMeteoState = (state: State) => state.meteo;

export const getWeatherCities = createSelector(getMeteoState, fromMeteo.getCities);