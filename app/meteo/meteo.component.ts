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

    onAdd(value: string): void {
        let newValue: City[] = this.weatherService.getStore().slice(0);
        let weatherStoreValue: City[];

        if ((newValue.filter((city: City) => city.name === value)).length === 0) {
            weatherStoreValue = this.weatherService.weatherStore.filter((city: City) => city.name === value);

            newValue.push(...weatherStoreValue);
            this.updated = newValue;
            this.weatherService.storeCities(this.updated);
        }
    }
}