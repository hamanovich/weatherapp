import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoogleMapComponent } from './google-map.component';
import { GoogleMapService } from './google-map.service';

import { Store, StoreModule } from '@ngrx/store';

describe('Component: GoogleMapComponent', () => {
    let component: GoogleMapComponent;
    let fixture: ComponentFixture<GoogleMapComponent>;

    let spy: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;
    let googleMapService: GoogleMapService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.provideStore({})],
            declarations: [GoogleMapComponent],
            providers: [GoogleMapService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoogleMapComponent);
        component = fixture.componentInstance;

        googleMapService = fixture.debugElement.injector.get(GoogleMapService);

        spy = spyOn(googleMapService, 'init').and.returnValue('');
    });

    it('should have a defined component', () => {
        expect(fixture).toBeDefined();
        console.log('google fix', fixture);
        expect(component).toBeDefined();
    });

});