import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {MeteoService} from './meteo/meteo.service';

@Component({
    selector: 'wapi',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    position: Position;

    constructor(private meteoService: MeteoService) {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by your browser');
            return;
        }
    }

    ngOnInit() {
        this.meteoService.getPosition((position: Position) => {
            this.position = position;
        });
    }
}