import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { WeatherComponent } from './weather.component';
import { MeteoModule } from '../meteo.module';

import { reducer } from '../../dataflow/reducers';
import { Action, Store, StoreModule } from '@ngrx/store';

import * as fromRoot from '../../dataflow/reducers';
import * as meteo from '../../dataflow/actions/meteo.actions';

import City from '../../models/city';

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

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

describe('WeatherComponent', () => {
    let component: WeatherComponent;
    let fixture: ComponentFixture<WeatherComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.provideStore(reducer)],
            declarations: [WeatherComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: Router, useClass: RouterStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherComponent);
        component = fixture.componentInstance;
    });

    it('should NOT have cities before ngOnInit', () => {
        expect(component.cities$).not.toBeDefined();
    });

    it('should NOT have cities after ngOnInit', () => {
        fixture.detectChanges();
        expect(component.cities$).toBeDefined();
    });

    describe('after get cities', () => {
        let allCities: City[];

        beforeEach(inject([Store], (store: Store<fromRoot.State>) => {
            store.dispatch(new meteo.LoadSuccessAction(testLoadPayload));
        }));

        it('should HAVE cities', inject([Store], (store: Store<fromRoot.State>) => {
            store.select(fromRoot.getWeatherCities)
            .subscribe((cities: City[]) => {
                allCities = cities;
                expect(allCities.length).toBeGreaterThan(0);
            });
        }));

        it('should raise selected event when clicked', inject([Store], (store: Store<fromRoot.State>) => {
            store.dispatch(new meteo.RemoveAction(1));
            store.select(fromRoot.getWeatherCities)
            .subscribe((cities: City[]) => {
                expect(cities.length).toEqual(2);
            });
        }));
    });
});