import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
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

export class WeatherComponent implements OnInit, OnChanges {
    cities: City[];
    coords: Coords;
    thead: string[];
    done: boolean;
    highlight: boolean;
    highlightCityCheck: boolean;

    @Input() position: CurrentPosition;
    @Input() updated: City[];

    constructor(private weatherService: WeatherService,
                private cd: ChangeDetectorRef) {
        this.thead = ['ID', 'Name', 'Coordinates; lat,lng', 'Temperature; C', 'Remove'];
        this.cities = [];
        this.done = false;
        this.highlight = true;

        cd.detach();

        setInterval(() => {
            this.getData();
            this.cd.detectChanges();
        }, constants.UPDATE_TIME);
    }

    getData(): void {
        this.weatherService
            .getCities(`${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                (data: {list: Array<City>}) => {
                    this.cities = data.list;
                    this.coords = this.position.coords;
                    this.done = true;
                    this.cd.markForCheck();

                    this.weatherService.storeCities(this.cities);
                }
            );

        this.highlightCityCheck = false;
    }

    ngOnInit() {
        this.getData();
    }

    ngOnChanges() {
        this.cities = this.updated;
    }

    onHighlight(i: number): void {
        this.cities = this.cities.map((city: City, index: number) => {
            city.highlight = index === i ? !city.highlight : false;

            return city;
        });
    }

    onRemove(value: number) {
        this.updated = this.weatherService.getStore();
        this.updated.splice(value, 1);
        this.cities = this.updated.slice();
    }
}