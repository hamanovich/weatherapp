import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { API_URL_ICON } from '../../../../constants';
import Weather from '../../../../models/weather';

@Component({
    selector: 'wapi-icon-weather',
    templateUrl: 'icon-weather.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class IconWeatherComponent implements OnInit {
    path: string = API_URL_ICON;
    main: string;

    @Input('iconWeather') weather: Weather;

    ngOnInit() {
        this.main = this.weather.main;
    }
}
