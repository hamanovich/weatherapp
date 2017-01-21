import {Component, Input} from '@angular/core';

import {MeteoService} from './meteo.service';

import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';

@Component({
    selector: 'wapi-meteo',
    templateUrl: './meteo.component.html'
})

export class MeteoComponent {
    @Input() position: CurrentPosition;
    @Input() updated: City[];

    constructor(private meteoService: MeteoService) {
    }

    onAdd(value: string): void {
        let newValue: City[] = this.meteoService.getStore().slice(0);
        let weatherStoreValue: City[];

        if ((newValue.filter((city: City) => city.name.toLowerCase() === value.toLowerCase())).length === 0) {
            weatherStoreValue = this.meteoService.weatherStore.filter((city: City) => city.name.toLowerCase() === value.toLowerCase());

            newValue.push(...weatherStoreValue);
            this.updated = newValue;
            this.meteoService.setCities(this.updated);
        }
    }
}
