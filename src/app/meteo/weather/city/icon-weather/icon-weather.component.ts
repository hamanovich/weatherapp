import { Component, Input } from '@angular/core';
import { API_URL_ICON } from '../../../../constants';
import Weather from '../../../../models/weather';

@Component({
    selector: 'wapi-icon-weather',
    templateUrl: 'icon-weather.component.html'
})

export class IconWeatherComponent {
    path: string = API_URL_ICON;
    main: string;

    @Input() weather: Weather;
    @Input() weatherMain: string;
}
