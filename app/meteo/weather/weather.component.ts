import {
    Component,
    Input,
    OnInit,
    OnChanges,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from '@angular/core';
import {Response} from '@angular/http';

import {WeatherService} from './weather.service';

import CurrentPosition from '../../models/position.interface';
import City from '../../models/city.interface';
import Coords from '../../models/coords.interface';

import * as constants from '../../constants';

@Component({
    selector: 'wapi-weather',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit, OnChanges {
    cities: City[];
    coords: Coords;
    thead: string[];
    isDone: boolean;
    isHighlight: boolean;
    highlightCity: City;
    isHighlightCity: boolean;
    errorText: string;

    @Input() position: CurrentPosition;
    @Input() updated: City[];

    constructor(private weatherService: WeatherService,
                private cd: ChangeDetectorRef) {
        this.thead = [
            'ID',
            'Name',
            'Coords; lat,lng',
            'Temp; C',
            'Wind',
            'Overall',
            ''
        ];
        this.cities = [];
        this.isDone = false;
        this.isHighlight = true;

        cd.detach();

        setInterval(() => {
            this.clearData();
            this.getData();
            this.cd.detectChanges();
        }, constants.UPDATE_TIME);
    }

    clearData(): void {
        this.weatherService.weatherStore = [];
        this.weatherService.weatherKey = {};
    }

    getData(): void {
        this.weatherService
            .getCities(`${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                (data: {list: City[]}) => {
                    this.cities = data.list;
                    this.coords = this.position.coords;
                    this.isDone = true;
                    this.cd.markForCheck();

                    this.weatherService.setCities(this.cities);
                },
                (error: Response) => {
                    this.errorText = error.status + ': ' + error.statusText;
                    this.cd.markForCheck();
                });

        this.isHighlightCity = false;
    }

    ngOnInit() {
        this.getData();
    }

    ngOnChanges() {
        this.cities = this.updated;
    }

    onHighlight(i: number): void {
        this.cities = this.cities.map((city: City, index: number) => {
            city.isHighlight = index === i ? !city.isHighlight : false;
            this.highlightCity = this.cities[i];
            this.isHighlightCity = this.cities[i].isHighlight;

            return city;
        });
    }

    onRemove(value: number) {
        let valueName: string = this.weatherService.getStore()[value].name;

        if (this.highlightCity && valueName === this.highlightCity.name) {
            this.isHighlightCity = false;
        }

        this.updated = this.weatherService.getStore();
        this.updated.splice(value, 1);
        this.cities = this.updated;
    }
}
