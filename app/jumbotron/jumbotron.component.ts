import {Component} from '@angular/core';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: './jumbotron.component.html'
})

export class JumbotronComponent {
    public APP_TITLE: string = 'Weather Application';
    public APP_TITLE_SUB: string = 'OpenWeatherMap';
}