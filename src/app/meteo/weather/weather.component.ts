import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Response } from "@angular/http";

import { Router } from '@angular/router';

import { Observable } from "rxjs/Observable";

import { Store } from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

import City from '../../models/city';
import FilterColumns from '../../models/filter.columns';

@Component({
    selector: 'wapi-weather',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {
    cities$: Observable<City[]>;
    thead$: Observable<FilterColumns>;
    toggle$: Observable<boolean>;
    errorText$: Observable<Response>;

    constructor(private store: Store<fromRoot.State>,
        private router: Router) {
    }

    ngOnInit() {
        this.thead$ = this.store.select(fromRoot.getWeatherFiltersColumns);
        this.toggle$ = this.store.select(fromRoot.getWeatherFilterToggle);
        this.errorText$ = this.store.select(fromRoot.getWeatherErrors);
        this.cities$ = this.store.select(fromRoot.getWeatherCities);
    }

    onHighlight(i: number): boolean {
        this.store.dispatch(new meteo.HightlightAction(i));

        return false;
    }

    onRemove(index: number): void {
        this.store.dispatch(new meteo.RemoveAction(index));
    }

    onSelect(id: number): void {
        const url: string = `/weatherDetails/${id}`;
        this.router.navigateByUrl(url);
    }
}
