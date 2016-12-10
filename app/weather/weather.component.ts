import {Component, Input, OnChanges} from '@angular/core';

import {WeatherService} from './weather.service';

import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';
import Coords from '../models/coords.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnChanges {
    thead: string[] = ['ID', 'Name', 'Coordinates; lat,lng', 'Temperature; C'];
    cities: City[] = [];
    coords: Coords;
    done: boolean = false;

    @Input() position: CurrentPosition;

    constructor(private weatherService: WeatherService) {
    }

    ngOnChanges() {
        this.weatherService.getCities(`${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                data => {
                    this.cities.push(data);
                    this.coords = this.position.coords;
                    this.done = true;
                }
            );
    }
}