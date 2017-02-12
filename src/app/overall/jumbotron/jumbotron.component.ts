import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../dataflow/reducers';

import { Scheduler } from "rxjs/Rx";
import { Observable } from "rxjs/Observable";

import City from '../../models/city';
import Coords from '../../models/coords';

import * as constants from '../../constants';

import { MeteoService } from '../../meteo/meteo.service';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JumbotronComponent {
    APP_TITLE: string = constants.APP_TITLE;
    city: City;
    position: Observable<Coords>;

    constructor(private store: Store<fromRoot.State>,
        private cd: ChangeDetectorRef,
        private meteoService: MeteoService) {

        this.store.select(fromRoot.getWeatherYourCity)
            .observeOn(Scheduler.async)
            .subscribe((city: City) => {
                this.city = city;
                this.cd.markForCheck();
            });

        this.position = this.meteoService.getCurrentPosition();
    }
}
