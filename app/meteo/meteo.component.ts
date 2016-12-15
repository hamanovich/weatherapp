import {Component, Input} from '@angular/core';
import {WeatherService} from '../weather/weather.service';
import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';

@Component({
    selector: 'wapi-meteo',
    templateUrl: './meteo.component.html'
})

export class MeteoComponent {
    @Input() position: CurrentPosition;
    @Input() updated: City[];

    constructor(private weatherService: WeatherService) {
    }

    onAdd(value: City[]): void {
        let newValue: City[] = this.weatherService.getStore().slice(0);

        newValue.push(...value);
        this.updated = newValue;
        this.weatherService.updateStore(this.updated);
    }

    onRemove(value: number): void {
        this.updated = this.weatherService.getStore();
        this.updated = [
            ...this.updated.slice(0, value),
            ...this.updated.slice(value + 1)
        ];
        this.weatherService.updateStore(this.updated);
    }
}