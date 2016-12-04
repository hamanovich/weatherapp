import {Component} from '@angular/core';

import {API_URL} from '../constants';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: './jumbotron.component.html'
})

export class JumbotronComponent {
    private APP_TITLE: string = 'Weather Application';
    private APP_TITLE_SUB: string = 'OpenWeatherMap';
    private API_URL: string = API_URL;
}