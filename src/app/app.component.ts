import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as geo from './dataflow/actions/geo.actions';
import * as meteo from './dataflow/actions/meteo.actions';
import * as fromRoot from './dataflow/reducers';

import City from './models/city';
import Coords from './models/coords';

@Component({
    selector: 'wapi',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/index.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy {
    city: City;
    subscription: Subscription;

    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.store.dispatch(new geo.GetPositionAction());

        this.subscription = this.store.select(fromRoot.getGeoCoords).subscribe((position: Coords) => {
            if (position) {
                this.store.dispatch(new meteo.LoadAction(position));

                this.city = this.store.select(fromRoot.getWeatherYourCity);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
