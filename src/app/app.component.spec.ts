import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';

import { reducer } from './dataflow/reducers';

import { AppComponent } from './app.component';

import { Store, StoreModule } from '@ngrx/store';

describe(`App`, () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.provideStore(reducer)],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [AppComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it(`should be readly initialized`, () => {
        expect(fixture).toBeDefined();
        expect(component).toBeDefined();
    });
});
