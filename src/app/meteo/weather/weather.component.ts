import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { Response } from "@angular/http";

import { Subscription } from "rxjs/Subscription";
import { Store }        from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

import City            from '../../models/city';
import CurrentPosition from '../../models/position';

import * as constants from '../../constants';
import { Observable } from "rxjs";

@Component({
    selector: 'wapi-weather',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {
    cities: Observable<City[]>;
    thead: string[];
    errorText: Observable<Response>;

    @Input() position: CurrentPosition;

    constructor(private store: Store<fromRoot.State>) {
        this.thead = ['ID', 'Name', 'Coords; lat,lng',
            'Temp; C', 'Wind', 'Overall', ''];

        this.errorText = this.store.select(fromRoot.getWeatherErrors);
        this.cities = this.store.select(fromRoot.getWeatherCities);
    }

    ngOnInit() {
        const urlCities: string = `${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`;
        const urlCity: string = `${constants.GEO_URL}weather?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&appid=${constants.GEO_API_KEY}`;

        this.store.dispatch(new meteo.WeatherAction(urlCity));
        this.store.dispatch(new meteo.LoadAction(urlCities));
    }

    onHighlight(i: number): void {
        this.store.dispatch(new meteo.HightlightAction(i));
    }

    onRemove(index: number) {
        this.store.dispatch(new meteo.RemoveAction(index));
    }
}
