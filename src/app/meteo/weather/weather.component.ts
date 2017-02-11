import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Response } from "@angular/http";

import { Router } from '@angular/router';

import { Observable } from "rxjs/Observable";

import { Store } from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

import City from '../../models/city';
import Coords from "../../models/coords";
import FilterColumns from '../../models/filter.columns';

// import * as constants from '../../constants';

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

    @Input() position: Coords;

    constructor(private store: Store<fromRoot.State>,
                private router: Router) {
    }

    ngOnInit() {
        // const urlCities: string = constants.GEO_URL
        //     + 'find?lat=' + this.position.latitude
        //     + '&lon=' + this.position.longitude
        //     + '&cnt=' + constants.NUMBER_OF_CITIES
        //     + '&appid=' + constants.GEO_API_KEY;
        const urlCities: string = '/app/mock/find25.json';

        this.store.dispatch(new meteo.LoadAction(urlCities));

        this.thead$ = this.store.select(fromRoot.getWeatherFiltersColumns);
        this.toggle$ = this.store.select(fromRoot.getWeatherFilterToggle);

        this.errorText$ = this.store.select(fromRoot.getWeatherErrors);
        this.cities$ = this.store.select(fromRoot.getWeatherCities);
    }

    onHighlight(i: number): boolean {
        this.store.dispatch(new meteo.HightlightAction(i));

        return false;
    }

    onRemove(index: number) {
        this.store.dispatch(new meteo.RemoveAction(index));
    }

    onSelect(id: number) {
        this.router.navigate(['/weatherDetails', id]);
    }
}
