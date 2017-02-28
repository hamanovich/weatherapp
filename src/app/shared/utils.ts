import { DebugElement } from '@angular/core';
import * as constants from '../constants';

export function kelvinToCelsius(temperature: number): number {
    return temperature - constants.CELSIUS_KELVIN_DIFFERENCE;
}

export function kelvinToFahrenheit(temperature: number): number {
    return Number((constants.KELVIN_FAHRENHEIT_FACTOR * temperature - constants.KELVIN_FAHRENHEIT_DIFFERENCE).toFixed(2));
}

export function kelvinToKelvin(temperature: number): number {
    return temperature;
}

export const mathMethods: any = {
    '>': (a: number, b: number): boolean => a > b,
    '<': (a: number, b: number): boolean => a < b
};


export const ButtonClickEvents: any = {
    left: { button: 0 },
    right: { button: 2 }
};