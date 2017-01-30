import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

import {Store}        from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

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
    isAdded: boolean;

    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {
        this.cityName   = new FormControl();
        this.searchForm = fb.group({
            cityName: this.cityName
        });

        this.serverError = '';
    }

    getWeather() {
        this.weather = this.cityName.value;
        this.searchForm.reset();
        this.isAdded = false;
    }

    onAdd() {
        this.store.dispatch(new meteo.AddAction(this.weather));
        this.isAdded = true;
    }
}