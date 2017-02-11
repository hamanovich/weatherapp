import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../dataflow/reducers';

import City from '../../models/city';

import * as constants from '../../constants';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JumbotronComponent {
    APP_TITLE: string = constants.APP_TITLE;
    city: City;

    constructor(private store: Store<fromRoot.State>,
        private cd: ChangeDetectorRef) {
        this.store.select(fromRoot.getWeatherYourCity)
            .subscribe((city: City) => {
                this.city = city;
                this.cd.markForCheck();
            });
    }
}
