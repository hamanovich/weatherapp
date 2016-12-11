import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {WeatherService} from '../weather/weather.service';
import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';
import Coords from '../models/coords.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: './jumbotron.component.html'
})

export class JumbotronComponent implements OnInit {
    APP_TITLE: string = constants.APP_TITLE;
    APP_TITLE_SUB: string = constants.APP_TITLE_SUB;
    API_URL: string = constants.API_URL;

    coords: Coords;
    yourWeather: Observable<City>;

    @Input() position: CurrentPosition;

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit() {
        this.yourWeather = this.weatherService
            .getCities(`${constants.GEO_URL}weather?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&appid=${constants.GEO_API_KEY}`)
            .map(n => n.weather)
            .map(p => p[0].description);
    }
}