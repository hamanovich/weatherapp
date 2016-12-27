import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {WeatherService} from '../weather/weather.service';

import CurrentPosition from '../models/position.interface';
import City from '../models/city.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['jumbotron.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JumbotronComponent implements OnInit {
    APP_TITLE: string;
    yourWeather: Observable<City>;

    @Input() position: CurrentPosition;

    constructor(private weatherService: WeatherService) {
        this.APP_TITLE = constants.APP_TITLE;
    }

    ngOnInit() {
        this.yourWeather = this.weatherService
            .getCities(`${constants.GEO_URL}weather?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&appid=${constants.GEO_API_KEY}`)
            .map((n: {weather: [{description: string}]}) => n.weather[0].description);
    }
}