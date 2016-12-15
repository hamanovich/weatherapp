import {Component, Input, ChangeDetectorRef, OnChanges} from '@angular/core';
import {WeatherService} from '../weather/weather.service';
import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';

@Component({
    selector: 'wapi-meteo',
    templateUrl: './meteo.component.html'
})

export class MeteoComponent implements OnChanges{
    @Input() position: CurrentPosition;
    @Input() updated: City[];

    constructor(private weatherService: WeatherService,
                private cd: ChangeDetectorRef) {

    }

    ngOnChanges() {
        console.log('METEO ChAGNESSD');
    }

    onAdd(value: City[]): void {
        // this.weatherService.addToStore(value);
        this.updated = this.weatherService.getStore();
        console.log('onAdd value -> ', value);
        this.updated.push(...value);
        this.weatherService.updateStore(this.updated);

        this.cd.markForCheck();
    }

    onRemove(value: number): void {
        this.updated = this.weatherService.getStore();
        this.updated = [...this.updated.slice(0, value), ...this.updated.slice(value + 1)];
        this.weatherService.updateStore(this.updated);

        this.cd.markForCheck();
    }
}