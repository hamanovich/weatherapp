import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { MeteoService } from './meteo.service';

import City from '../models/city';
import Coords from '../models/coords';

const fakePosition: Coords = {
    latitude: 53.933334,
    longitude: 27.65
};

const fakeCities: City[] = [
    {
        "id": 623869,
        "name": "Ozerishche",
        "coord": {
            "lon": 27.700001,
            "lat": 53.933334
        },
        "main": {
            "temp": 290.15,
            "pressure": 1025,
            "humidity": 100,
            "temp_min": 267.15,
            "temp_max": 267.15
        },
        "dt": 1486018800,
        "wind": {
            "speed": 2,
            "deg": 120
        },
        "sys": {
            "country": ""
        },
        "clouds": {
            "all": 90
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",
                "icon": "50d"
            }
        ]
    },
    {
        "id": 629962,
        "name": "Slepnya",
        "coord": {
            "lon": 27.65,
            "lat": 53.933334
        },
        "main": {
            "temp": 287.15,
            "pressure": 1025,
            "humidity": 100,
            "temp_min": 267.15,
            "temp_max": 267.15
        },
        "dt": 1486018800,
        "wind": {
            "speed": 2,
            "deg": 120
        },
        "sys": {
            "country": ""
        },
        "clouds": {
            "all": 90
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",
                "icon": "50d"
            }
        ]
    },
    {
        "id": 620553,
        "name": "Uruch’ye",
        "coord": {
            "lon": 27.683332,
            "lat": 53.950001
        },
        "main": {
            "temp": 277.15,
            "pressure": 1025,
            "humidity": 100,
            "temp_min": 267.15,
            "temp_max": 267.15
        },
        "dt": 1486018800,
        "wind": {
            "speed": 2,
            "deg": 120
        },
        "sys": {
            "country": ""
        },
        "clouds": {
            "all": 90
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",
                "icon": "50d"
            }
        ]
    }
];

describe('MeteoService (mockBackend)', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                MeteoService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
            .compileComponents();
    }));

    it('can instantiate service when inject service', inject([MeteoService], (service: MeteoService) => {
        expect(service instanceof MeteoService).toBeTruthy();
    }));

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        const service: MeteoService = new MeteoService(http);
        expect(service instanceof MeteoService).toBeTruthy();
    }));


    it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: MockBackend) => {
        expect(backend).not.toBeNull('backend should be provided');
    }));

    describe('when getCityByName', () => {
        let backend: MockBackend;
        let service: MeteoService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MeteoService(http);
            const options: ResponseOptions = new ResponseOptions({
                status: 200,
                body: { data: fakeCities[0] }
            });
            response = new Response(options);
        }));

        it('should have expected fake city (then)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getCityByName('Ozerishche').toPromise()
                .then((city: any) => {
                    expect(city.data).toEqual(fakeCities[0]);
                });
        })));

        it('should have expected fake city(Observable)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getCityByName('Ozerishche')
                .do((city: any) => {
                    expect(city.data).toEqual(fakeCities[0]);
                })
                .toPromise();
        })));

        it('should be OK returning no city', async(inject([], () => {
            const response: Response = new Response(new ResponseOptions({
                status: 200,
                body: { data: [] }
            }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getCityByName('Ozerishche')
                .do((city: any) => {
                    expect(city.data.length).toBe(0, 'should have no city');
                })
                .toPromise();
        })));
    });

    describe('when getCitiesByLocation', () => {
        let backend: MockBackend;
        let service: MeteoService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MeteoService(http);
            const options: ResponseOptions = new ResponseOptions({
                status: 200,
                body: { data: fakeCities }
            });
            response = new Response(options);
        }));

        it('should have expected fake cities (Observable)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getCitiesByLocation(fakePosition)
                .do((cities: any) => {
                    expect(cities.data.length).toBe(fakeCities.length);
                })
                .toPromise();
        })));
    });

    describe('when getCityByLocation', () => {
        let backend: MockBackend;
        let service: MeteoService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MeteoService(http);
            const options: ResponseOptions = new ResponseOptions({
                status: 200,
                body: { data: fakeCities[1] }
            });
            response = new Response(options);
        }));

        it('should have expected fake city (Observable)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            const fakeCityByPosition: City = fakeCities.filter((city: City) =>
                city.coord.lat === fakePosition.latitude && city.coord.lon === fakePosition.longitude);

            service.getCityByLocation(fakePosition)
                .do((cities: any) => {
                    expect(cities.data).toEqual(fakeCityByPosition[0]);
                })
                .toPromise();
        })));
    });

    describe('when getCityById', () => {
        let backend: MockBackend;
        let service: MeteoService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MeteoService(http);
            const options: ResponseOptions = new ResponseOptions({
                status: 200,
                body: { data: fakeCities[2] }
            });
            response = new Response(options);
        }));

        it('should have expected fake city (Observable)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            const fakeCityById: City = fakeCities.filter((city: City, index: number) =>
                city.id === fakeCities[2].id);

            service.getCityById(fakeCities[2].id)
                .do((city: any) => {
                    expect(city.data).toEqual(fakeCityById[0]);
                })
                .toPromise();
        })));

        it('should treat 404 as an Observable error', async(inject([], () => {
            const response: Response = new Response(new ResponseOptions({ status: 404 }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getCityById(1)
                .do((city: any) => {
                    fail('should not respond with city');
                })
                .catch((err: any) => {
                    expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
                    return Observable.of(null);
                })
                .toPromise();
        })));
    });
});