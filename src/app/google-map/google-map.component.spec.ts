import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoogleMapComponent } from './google-map.component';
import { GoogleMapService } from './google-map.service';

import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../dataflow/reducers';

describe('Component: GoogleMapComponent', () => {
    let component: GoogleMapComponent;
    let fixture: ComponentFixture<GoogleMapComponent>;

    let de: DebugElement;
    let el: HTMLElement;
    let googleMapService: GoogleMapService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.provideStore(reducer)],
            declarations: [GoogleMapComponent],
            providers: [GoogleMapService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoogleMapComponent);
        component = fixture.componentInstance;

        googleMapService = fixture.debugElement.injector.get(GoogleMapService);
    });

    it('should have a defined component', () => {
        expect(fixture).toBeDefined();
        expect(component).toBeDefined();
    });

    it('should have a title and subtitle', () => {
        expect(!!component.GOOGLE_MAP_TITLE && !!component.GOOGLE_MAP_TITLE_SUB).toEqual(true);
    });

});