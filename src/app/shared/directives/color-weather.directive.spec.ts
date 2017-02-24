import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorWeather } from './color-weather.directive';

import City from '../../models/city';

import { hex2rgb } from '../utils';

@Component({
    template: `
    <table>
        <tbody>
            <tr [colorWeather]="fakeCities[0]"></tr>
            <tr [colorWeather]="fakeCities[1]"></tr>
            <tr [colorWeather]="fakeCities[2]"></tr>
            <tr [colorWeather]="fakeCities[3]"></tr>
            <tr>No directive</tr>
        </tbody>
    </table>`
})

class TestDirectiveComponent {
    fakeCities: City[] = [
        { main: { temp: 0 } },
        { main: { temp: 273 } },
        { main: { temp: 500 } },
        { main: { temp: Number('NaN') } }
    ];
}

describe('ColorWeatherDirective', () => {
    let fixture: ComponentFixture<TestDirectiveComponent>;
    let des: DebugElement[];
    let bareTR: DebugElement;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [ColorWeather, TestDirectiveComponent]
        })
            .createComponent(TestDirectiveComponent);

        fixture.detectChanges();

        des = fixture.debugElement.queryAll(By.directive(ColorWeather));
        bareTR = fixture.debugElement.query(By.css('tr:not([colorWeather])'));
    });

    it('should have 4 highlighted elements', () => {
        expect(des.length).toBe(4);
    });

    it('should color 1st <tr> background "#A9D0ED"', () => {
        const bgColor: string = des[0].nativeElement.style.backgroundColor;
        expect(bgColor).toBe(hex2rgb('#A9D0ED'));
    });

    it('should color 2nd <tr> background "#DEEEFB"', () => {
        const bgColor: string = des[1].nativeElement.style.backgroundColor;
        expect(bgColor).toBe(hex2rgb('#DEEEFB'));
    });

    it('should color 3rd <tr> background "#FCF046"', () => {
        const bgColor: string = des[2].nativeElement.style.backgroundColor;
        expect(bgColor).toBe(hex2rgb('#FCF046'));
    });

    it('should color 4th <tr> background default', () => {
        const bgColor: string = des[3].nativeElement.style.backgroundColor;
        expect(bgColor).toBe(hex2rgb('#DEEEFB'));
    });

    it('can inject `ColorWeather` in 1st <tr>', () => {
        const dir: any = des[0].injector.get(ColorWeather);
        expect(dir).toBeTruthy();
    });
});