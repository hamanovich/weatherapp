import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import City from '../models/city';

import { Store } from '@ngrx/store';
import * as fromRoot from '../dataflow/reducers';

import { API_URL_ICON } from '../constants';

@Component({
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WidgetComponent implements OnInit {
    city: City;
    path: string = API_URL_ICON;

    constructor(private router: Router,
        private store: Store<fromRoot.State>,
        private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.store.select(fromRoot.getWeatherYourCity)
            .subscribe((city: City) => {
                this.city = city;
                this.cd.markForCheck();
            });
    }

    closeWidget() {
        this.router.navigate([{outlets: {widget: null}}]);
    }
}
