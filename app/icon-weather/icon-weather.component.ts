import {Component, Input, OnInit} from '@angular/core';

import {API_URL_ICON} from '../constants';

import Weather from '../models/weather.interface';

@Component({
    selector: 'wapi-icon-weather',
    templateUrl: './icon-weather.component.html'
})

export class IconWeatherComponent implements OnInit {
    path: string;
    main: string;

    @Input('iconWeather') weather: Weather;

    constructor() {
        this.path = API_URL_ICON;
    }

    ngOnInit() {
        this.main = this.weather.main;
    }
}