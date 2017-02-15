import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MeteoService } from './meteo/meteo.service';

import { Store } from '@ngrx/store';
import * as geo from './dataflow/actions/geo.actions';
import * as fromRoot from './dataflow/reducers';

import City from './models/city';
import Position from './models/position';

@Component({
    selector: 'wapi',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/index.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    position: Position;
    city: City;

    constructor(private meteoService: MeteoService,
                private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.meteoService.getPosition((position: Position) => {
            this.store.dispatch(new geo.GetPositionAction(position));
            this.position = position;
        });

        this.city = this.store.select(fromRoot.getWeatherYourCity);
    }
}
