import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MeteoService } from './meteo/meteo.service';

import { Store } from '@ngrx/store';
import * as geo from './dataflow/actions/geo.actions';
import * as fromRoot from './dataflow/reducers';

import * as meteo from './dataflow/actions/meteo.actions';

import Coords from './models/coords';

@Component({
    selector: 'wapi',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/index.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    constructor(private meteoService: MeteoService,
                private store: Store<fromRoot.State>) {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by your browser');
            return;
        }
    }

    ngOnInit() {
        this.meteoService.getPosition((position: Position) => {
            this.store.dispatch(new geo.GetPositionSuccessAction(position));
        });

        this.store.select(fromRoot.getGeoCoords).subscribe((position: Coords) => {
            if (position) {
                const urlCities: string = '/app/mock/find25.json';
                // const urlCities: string = constants.GEO_URL
                //     + 'find?lat=' + position.latitude
                //     + '&lon=' + position.longitude
                //     + '&cnt=' + constants.NUMBER_OF_CITIES
                //     + '&appid=' + constants.GEO_API_KEY;

                this.store.dispatch(new meteo.LoadAction(urlCities));
                this.store.dispatch(new meteo.LoadOneAction(position));
                this.meteoService.setCurrentPosition(position);
            }
        });
    }
}
