import { DebugElement } from '@angular/core';
import * as constants from '../constants';

export function kelvinToCelsius(temperature: number): number {
    return temperature - constants.CELSIUS_KELVIN_DIFFERENCE;
}

export function kelvinToFahrenheit(temperature: number): number {
    return constants.KELVIN_FAHRENHEIT_FACTOR * temperature - constants.KELVIN_FAHRENHEIT_DIFFERENCE;
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

export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
    if (el instanceof HTMLElement) {
        el.click();
    } else {
        el.triggerEventHandler('click', eventObj);
    }
}

export function hex2rgb(hex: string, opacity?: number): string {
    hex = hex.trim().substr(1);
    const bigint: number = parseInt(hex, 16);
    let h: number[] = [];

    if (hex.length === 3) {
        h.push((bigint >> 4) & 255);
        h.push((bigint >> 2) & 255);
    } else {
        h.push((bigint >> 16) & 255);
        h.push((bigint >> 8) & 255);
    }

    h.push(bigint & 255);

    if (arguments.length === 2) {
        h.push(opacity);
        return 'rgba(' + h.join(', ') + ')';
    } else {
        return 'rgb(' + h.join(', ') + ')';
    }
}