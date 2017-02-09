import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { MeteoService } from './meteo/meteo.service';

import * as constants from './constants';

import { Store } from '@ngrx/store';
import * as geo from './dataflow/actions/geo.actions';
import * as fromRoot from './dataflow/reducers';
import { Subscription } from "rxjs/Subscription";

import * as meteo from './dataflow/actions/meteo.actions';

import Coords from './models/coords';

@Component({
    selector: 'wapi',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
    position: Coords;
    subscription: Subscription;

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

       this.subscription = this.store.select(fromRoot.getGeoCoords).subscribe((position: Coords) => {
            if (position) {
                const urlCity: string = constants.GEO_URL
                    + 'weather?lat=' + position.latitude
                    + '&lon=' + position.longitude
                    + '&appid=' + constants.GEO_API_KEY;

                this.position = position;

                this.store.dispatch(new meteo.WeatherAction(urlCity));
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
