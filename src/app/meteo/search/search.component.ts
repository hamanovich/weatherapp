import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

import {Store}      from '@ngrx/store';
import {MeteoActions} from '../../actions/meteo.actions';
import {MeteoState} from '../../reducers';

@Component({
    selector: 'wapi-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})

export class SearchComponent {
    cityName: FormControl;
    searchForm: FormGroup;
    weather: string;
    serverError: string;

    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    constructor(private fb: FormBuilder,
                private store: Store<MeteoState>,
                private meteoActions: MeteoActions) {
        this.cityName   = new FormControl();
        this.searchForm = fb.group({
            cityName: this.cityName
        });

        this.serverError = '';
    }

    getWeather() {
        this.weather = this.cityName.value;
        this.searchForm.reset();
    }

    onAdd() {
        this.store.dispatch(this.meteoActions.Add(this.weather));
    }
}