import * as constants from '../constants';

export function kelvinToCelsius(temperature: number): number {
    return temperature - constants.CELSIUS_KELVIN_DIFFERENCE;
}

export function kelvinToFahrenheit(temperature: number): number {
    return 9 / 5 * temperature - constants.KELVIN_FAHRENHEIT_DIFFERENCE;
}

export function kelvinToKelvin(temperature: number): number {
    return temperature;
}

export const mathMethods = {
    '>': (a, b) => a > b,
    '<': (a, b) => a < b
};