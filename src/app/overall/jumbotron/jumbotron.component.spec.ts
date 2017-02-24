import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JumbotronComponent } from './jumbotron.component';

describe('JumbotronComponent', () => {
    let comp: JumbotronComponent;
    let fixture: ComponentFixture<JumbotronComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JumbotronComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JumbotronComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.APP_TITLE);
    });

    it('should display a different test title', () => {
        comp.APP_TITLE = 'WAPI v.2';
        fixture.detectChanges();
        expect(el.textContent).toContain('WAPI v.2');
    });
});