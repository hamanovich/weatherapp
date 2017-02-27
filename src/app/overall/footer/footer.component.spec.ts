import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);

        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.year'));
        el = de.nativeElement;
    });

    it('no year in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original year date', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(component.year);
    });

    it('should display a different test date', () => {
        component.year = 3000;
        fixture.detectChanges();
        expect(el.textContent).toContain(3000);
    });
});