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
        this.weatherService.storeCities(value);
        console.log('getStore ', this.weatherService.getStore());
        console.log('onAdd value -> ', value);
        this.updated = this.weatherService.getStore();
    }

    onRemo(value: number): void{
        this.updated = this.weatherService.getStore();
        console.log('OnRemo', value);
        console.log('this.updated', this.updated)
        this.updated = [...this.updated.slice(0, value), ...this.updated.slice(value + 1)];
        this.weatherService.updateStore(this.updated);
    }
}