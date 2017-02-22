import {
    TestBed
} from '@angular/core/testing';


import { GoogleMapComponent } from './google-map.component';
import { GoogleMapService } from './google-map.service';

import { Store } from '@ngrx/store';

import { StoreModule } from '@ngrx/store';

describe('Component: GoogleMapComponent', () => {
    let component: GoogleMapComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.provideStore({})
            ],
            declarations: [GoogleMapComponent],
            providers: [GoogleMapService]
        });

        const fixture = TestBed.createComponent(GoogleMapComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});