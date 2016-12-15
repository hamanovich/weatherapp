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
    highlightCity: City;
    highlightCityCheck: boolean;

    @Input() position: CurrentPosition;
    @Input() updated: City[];
    @Output() remove = new EventEmitter<number>();

    constructor(private weatherService: WeatherService,
                private cd: ChangeDetectorRef) {
        this.thead = ['ID', 'Name', 'Coordinates; lat,lng', 'Temperature; C', 'Remove'];
        this.cities = [];
        this.done = false;
        this.highlight = true;

        cd.detach();

        setInterval(() => {
            this.getData();
            console.log('interval!')
            this.cd.detectChanges();
        }, 55000);
    }

    getData(): void {
        this.weatherService
            .getCities(`${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                data => {
                    this.cities = data.list;
                    this.coords = this.position.coords;
                    this.done = true;
                    this.cd.markForCheck();

                    this.weatherService.storeCities(this.cities);
                }
            );
    }

    ngOnInit() {
        this.getData();
    }

    ngOnChanges() {
        console.info('changessssss.......................');
        this.cities = this.updated;
    }

    onHighlight(i: number): void {
        let highlight: boolean = this.cities[i].highlight || false;

        if (!highlight) {
            this.cities
                .filter(city => city.highlight)
                .map(city => {
                    delete city.highlight;
                    return city;
                });
        }

        this.cities[i].highlight = !highlight;
        this.highlightCity = this.cities[i];
        this.highlightCityCheck = this.cities[i].highlight;
    }

    onRemove(value: number) {
        this.remove.emit(value);
    }
}