import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {meteoReducer} from './meteo.reducer';
import '@ngrx/core/add/operator/select';

import Meteo from '../models/meteo';

export interface MeteoState {
    meteo: Meteo;
}

const reducers = {
  meteo: meteoReducer
};

const devReducer: ActionReducer<MeteoState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return devReducer(state, action);
}
