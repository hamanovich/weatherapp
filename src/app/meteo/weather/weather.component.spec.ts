import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { WeatherComponent } from './weather.component';
import { MeteoModule } from '../meteo.module';

import { reducer } from '../../dataflow/reducers';
import { Store, StoreModule } from '@ngrx/store';

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

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

    // it('should tell ROUTER to navigate when city clicked',
    //     inject([Router], (router: Router) => {

    //         const spy = spyOn(router, 'navigateByUrl');

    //         const cityEl = fixture.debugElement.query(By.css('.test'));
    //         cityEl.triggerEventHandler('click', component.cities$[0]);

    //         const navArgs = spy.calls.first().args[0];

    //         const id = component.cities$[0].id;
    //         expect(navArgs).toBe('/weatherDetails/' + id,
    //             'should nav to WeatherDetails for first city');
    //     }));

});