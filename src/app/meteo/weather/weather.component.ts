import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import {Response} from '@angular/http';
import {Subscription} from "rxjs/Subscription";
import {Store}        from '@ngrx/store';
import {MeteoActions} from '../../actions/meteo.actions';
import {MeteoState} from '../../reducers';

import Meteo           from '../../models/meteo';
import CurrentPosition from '../../models/position';
import City            from '../../models/city';

import * as constants from '../../constants';

@Component({
    selector: 'wapi-weather',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {
    cities: City[];
    thead: string[];
    isLoaded: boolean;
    errorText: string;
    subscription: Subscription;

    @Input() position: CurrentPosition;

    constructor(private store: Store<MeteoState>,
                private meteoActions: MeteoActions) {
        this.thead    = ['ID', 'Name', 'Coords; lat,lng',
            'Temp; C', 'Wind', 'Overall', ''];
        this.isLoaded = false;
    }

    ngOnInit() {
        const urlCities: string = `${constants.GEO_URL}find?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&cnt=${constants.NUMBER_OF_CITIES}&appid=${constants.GEO_API_KEY}`;
        const urlCity: string = `${constants.GEO_URL}weather?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&appid=${constants.GEO_API_KEY}`;

        this.store.dispatch(this.meteoActions.Weather(urlCity));
        this.store.dispatch(this.meteoActions.Load(urlCities));

        this.subscription = this.store
            .select((s: MeteoState) => s.meteo)
            .subscribe(
                (data: Meteo): void => {
                    if (data.cities.length) {
                        this.cities   = data.cities;
                        this.isLoaded = true;
                    }

                    if (data.error) {
                        this.errorText = data.error.status + ': ' + data.error.statusText;
                    }
                });
    }

    onHighlight(i: number): void {
        this.store.dispatch(this.meteoActions.Highlight(i));
    }

    onRemove(index: number) {
        this.store.dispatch(this.meteoActions.Remove(index));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
