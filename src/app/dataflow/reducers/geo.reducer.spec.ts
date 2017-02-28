import { reducer, State } from './geo.reducer'
import * as geo from '../actions/geo.actions';

const initialState: State = {
    coords: null,
    error: null
};

const testPayload: any = {
    coords: {
        latitude: 10,
        longitude: 10
    },
    error: null
};

describe('Geo reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: 'test' })
        ).toEqual(initialState);
    });

    it('should handle GET_POSITION_SUCCESS', () => {
        expect(reducer(initialState, {
            type: geo.ActionTypes.GET_POSITION_SUCCESS,
            payload: testPayload
        })
        ).toEqual(testPayload);
    });

    it('should handle GET_POSITION_FAIL', () => {
        expect(reducer(initialState, {
            type: geo.ActionTypes.GET_POSITION_FAIL,
            payload: 'ERROR'
        })
        ).toEqual(Object.assign({}, initialState, {
            error: 'ERROR'
        }));
    });
})