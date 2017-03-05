import { reducer, State } from './meteo.reducer'
import * as meteo from '../actions/meteo.actions';

import City from '../../models/city';
import Filters from '../../models/filters';

const testPayload: City = {
    coord: {
        lon: 25.32,
        lat: 53.09
    },
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
        }
    ],
    main: {
        temp: 277.238,
        pressure: 1003.11,
        humidity: 96
    },
    wind: {
        speed: 5.73,
        deg: 258.505
    },
    dt: 1488178119,
    id: 621754,
    name: "Slonim"
};

const testLoadPayload: any = [
    {
        message: 'accurate',
        cod: 200,
        count: 25,
        list: [testPayload, testPayload, testPayload]
    },
    testPayload
];

const testFilters: Filters = {
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
};

const initialState: State = {
    yourCity: [],
    cities: [],
    citiesCache: [],
    weather: '',
    error: null,
    filters: testFilters
};

describe('Meteo reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, { type: 'test' })
        ).toEqual(initialState)
    });

    it('should handle LOAD_SUCCESS', () => {
        const allCities: any = testLoadPayload[0].list;
        const yourCity: City = testLoadPayload[1];
        const cities: City[] = allCities.map((city: City) =>
            Object.assign({}, city, {
                hidden: false
            })
        );
        const actual: any = Object.assign({}, initialState, { yourCity, cities });

        expect(reducer(initialState, {
            type: meteo.ActionTypes.LOAD_SUCCESS,
            payload: testLoadPayload
        })).toEqual(actual);
    });

    it('should handle LOAD_FAIL', () => {
        expect(reducer(initialState, {
            type: meteo.ActionTypes.LOAD_FAIL,
            payload: 'ERROR'
        })
        ).toEqual(Object.assign({}, initialState, {
            error: 'ERROR'
        }));
    });

    it('should handle UPDATE', () => {
        const actual: any = Object.assign({}, initialState, { cities: testPayload });

        expect(reducer(initialState, {
            type: meteo.ActionTypes.UPDATE,
            payload: testPayload
        })).toEqual(actual);
    });

    it('should handle FILTER', () => {
        const actual: any = Object.assign({}, initialState, { filters: testFilters });

        expect(reducer(initialState, {
            type: meteo.ActionTypes.FILTER,
            payload: testFilters
        })).toEqual(actual);
    });

    it('should handle ADD_CACHE', () => {
        const payload: City[] = Object.assign({}, testPayload, { hidden: false });
        const actual: City[] = Object.assign({}, initialState, {
            citiesCache: initialState.citiesCache.concat([payload])
        });

        expect(reducer(initialState, {
            type: meteo.ActionTypes.ADD_CACHE,
            payload
        })).toEqual(actual);
    });

    it('should handle ADD', () => {
        const payload: string = 'Slonim';
        const fromCache: City[] = initialState.citiesCache
            .filter((city: City) => city.name.toLowerCase() === payload.toLowerCase());
        const actual: State = Object.assign({}, initialState, {
            cities: initialState.cities ? initialState.cities.concat(fromCache) : fromCache
        });

        expect(reducer(initialState, {
            type: meteo.ActionTypes.ADD,
            payload
        })).toEqual(actual);
    });

    it('should handle REMOVE', () => {
        const payload: number = 1;
        const state: State = Object.assign(initialState, {
            cities: initialState.cities.concat([testPayload, testPayload, testPayload])
        });
        const actual: State = Object.assign({}, state, {
            cities: [
                ...state.cities.slice(0, payload),
                ...state.cities.slice(payload + 1)
            ]
        });

        expect(reducer(state, {
            type: meteo.ActionTypes.REMOVE,
            payload
        })).toEqual(actual);
    });

    it('should handle HIGHLIGHT', () => {
        const payload: number = 1;
        const state: State = Object.assign({}, initialState, {
            cities: initialState.cities.concat([testPayload, testPayload, testPayload])
        });
        const highlight: City[] = state.cities.map((city: City, index: number) =>
            Object.assign({}, city, {
                isHighlight: index === payload ? !city.isHighlight : false
            })
        );
        const actual: State = Object.assign({}, state, { cities: highlight });

        expect(reducer(state, {
            type: meteo.ActionTypes.HIGHLIGHT,
            payload
        })).toEqual(actual);
    });
})