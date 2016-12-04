import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {WeatherService} from './weather/weather.service';

@Component({
    selector: 'wapi',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/index.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    position: Position;

    constructor(private weatherService: WeatherService) {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }
    }

    ngOnInit() {
        this.weatherService.getPosition((position: Position) => {
            this.position = position;
        });
    }
}
