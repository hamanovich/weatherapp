import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import {GoogleMapService} from '../google-map/google-map.service';
import {GeoService} from './geo.service';
import {HttpService} from "../http.service";

import * as constants from '../constants';

import City from '../models/city.interface';

@Component({
    selector: 'wapi-geo',
    templateUrl: './geo.component.html',
    styleUrls: ['./geo.component.scss']
})

export class GeoComponent implements OnInit {
    thead: string[] = ['ID', 'Name', 'Coordinates; lat,lng', 'Temperature; K'];
    cities: City[] = [];

    @ViewChild('tableCities') tableCities: ElementRef;
    @ViewChild('currentPosition') currentPosition: ElementRef;

    constructor(private gooMapService: GoogleMapService,
                private geoService: GeoService,
                private httpService: HttpService) {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }
    }

    ngOnInit() {
        this.geoService.getPosition((position: Position) => {
            const coords = position.coords;

            // Get cities and fill the table
            this.httpService.getCities(`${constants.GEO_URL}find?lat=${coords.latitude}&lon=${coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`)
                .subscribe(
                    data => {
                        data = data.list;

                        for (let city in data) {
                            if (data.hasOwnProperty(city)) {
                                this.cities.push(data[city]);
                            }
                        }

                        this.uiLogic(coords);
                    }
                );

            // Get position and return Google Map
            this.gooMapService.init(position, {zoom: 13});
        });
    }

    public uiLogic(coords: {latitude: number, longitude: number}): void {
        this.tableCities.nativeElement
            .classList.add('done');

        this.currentPosition.nativeElement
            .textContent = `${coords.latitude}, ${coords.longitude}`;
    }
}