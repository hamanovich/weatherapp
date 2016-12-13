import {
    Component,
    Input,
    OnChanges,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from '@angular/core';
import {WeatherService} from './weather.service';

import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';
import Coords from '../models/coords.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnChanges {
    cities: City[];
    coords: Coords;
    thead: string[];
    done: boolean;
    highlight: boolean;

    @Input() position: CurrentPosition;

    constructor(
        private weatherService: WeatherService,
        private cd: ChangeDetectorRef) {
        this.thead = ['ID', 'Name', 'Coordinates; lat,lng', 'Temperature; C'];
        this.cities = [];
        this.done = false;
        this.highlight = true;

        //cd.detach();
        //setInterval(() => {
        //    this.cd.detectChanges();
        //    console.log('UEP')
        //}, 2000);
    }

    ngOnChanges() {
        this.weatherService
            .getCities(`${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                data => {
                    this.cities = data.list;
                    this.coords = this.position.coords;
                    this.done = true;
                    this.cd.markForCheck();
                }
            );
    }

    checked(i: number): void {
        let highlight = this.cities[i].highlight;

        if (!highlight){
            this.cities
                .filter(city => city.highlight)
                .map(city => {
                    delete city.highlight;
                    return city;
                });
        }

        this.cities[i].highlight = !highlight;
    }
}