import * as constants from '../constants';
import * as utils from './utils';

describe('Utils', () => {
    const temperature: number = 273.15;

    it('should transform Kelvin to Celsius', () => {
        const toCelsius: number = utils.kelvinToCelsius(temperature);

        expect(toCelsius).toEqual(0);
        expect(toCelsius - 10).toEqual(-10);
    });

    it('should transform Kelvin to Fahrenheit', () => {
        const toFahrenheit: number = utils.kelvinToFahrenheit(temperature);

        expect(toFahrenheit).toEqual(32);
    });

    it('should transform Kelvin to Kelvin', () => {
        const toKelvin: number = utils.kelvinToKelvin(temperature);

        expect(toKelvin).toEqual(temperature);
    });

    it('should return true for MathMethods', () => {
        const greaterThan: boolean = utils.mathMethods['>'](500, temperature);
        const notGreaterThan: boolean = utils.mathMethods['>'](0, temperature);
        const lessThan: boolean = utils.mathMethods['<'](0, temperature);
        const notLessThan: boolean = utils.mathMethods['<'](500, temperature);

        expect(greaterThan).toBeTruthy();
        expect(notGreaterThan).toBeFalsy();
        expect(lessThan).toBeTruthy();
        expect(notLessThan).toBeFalsy();
    });
});