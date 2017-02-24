import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { Store, StoreModule } from '@ngrx/store';

describe(`App`, () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.provideStore({})],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [AppComponent]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                component = fixture.componentInstance;

                fixture.detectChanges();
            })
    }));

    // it(`should be readly initialized`, () => {
        // expect(fixture).toBeDefined();
        // expect(component).toBeDefined();
    // });

    // it('should log ngOnInit', () => {
    //     spyOn(console, 'log');
    //     expect(console.log).not.toHaveBeenCalled();

    //     component.ngOnInit();
    //     expect(console.log).toHaveBeenCalled();
    // });
});
