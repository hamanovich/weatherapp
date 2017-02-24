import { reducer, State } from './geo.reducer'
import * as meteo from '../actions/meteo.actions';

const initialState: State = {
    coords: null,
    error: null
};

const testPayload = {
    coords: {
        latitude: 10,
        longitude: 10
    }, error: null
}

describe('Meteo reducer', () => {
    // it('should return the initial state', () => {
    //     expect(
    //         reducer(undefined, { type: 'test' })
    //     ).toEqual({
    //         coords: null,
    //         error: null
    //     })
    // })

    // it('should handle GET_POSITION_SUCCESS', () => {
    //     expect(
    //         reducer([], {
    //             type: meteo.ActionTypes.
    //             payload: {
    //                 coords: {
    //                     latitude: 10,
    //                     longitude: 10
    //                 }
    //             }
    //         })
    //     ).toEqual({
    //         coords: {
    //             latitude: 10,
    //             longitude: 10
    //         }
    //     })
    // })
})