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
    changeDetection: ChangeDetectionStrategy.Default
})

export class WeatherComponent implements OnInit, OnChanges {
    cities: City[];
    coords: Coords;
    thead: string[];
    done: boolean;
    highlight: boolean;

    @Input() position: CurrentPosition;
    @Input() updated: City[];
    @Output() remove = new EventEmitter<number>();

    constructor(
        private weatherService: WeatherService,
        private cd: ChangeDetectorRef) {
        this.thead = ['ID', 'Name', 'Coordinates; lat,lng', 'Temperature; C', 'Remove'];
        this.cities = [];
        this.done = false;
        this.highlight = true;

        //cd.detach();

        //setInterval(() => {
        //    this.cities = this.weatherService.getStore();
        //    console.log('interval ->', this.cities);
        //    this.cd.markForCheck();
        //}, 5000);

        //setTimeout(() => {
        //    console.log('upd ', this.updated);
        //   // this.cities = this.updated;
        //}, 8000);

        //setInterval(() => {
        //    this.getData();
        //
        //    this.cd.detectChanges();
        //}, constants.UPDATE_TIME);
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
        let highlight: boolean = this.cities[i].highlight;

        if (!highlight) {
            this.cities
                .filter(city => city.highlight)
                .map(city => {
                    delete city.highlight;
                    return city;
                });
        }

        this.cities[i].highlight = !highlight;
    }

    onRemove(value: number) {
        this.remove.emit(value);
        console.log('onRemoveValue', value)
        //this.cities = [...this.cities.slice(0, value), ...this.cities.slice(value + 1)];
    }
}