import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { validateTemperatureRange } from '../../shared/validators/temperature-range.validator';

import { Store } from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

import * as constants from '../../constants';

@Component({
    selector: 'wapi-form-filter',
    templateUrl: 'form-filter.component.html',
    styleUrls: ['form-filter.component.css']
})

export class FormFilterComponent {
    filterForm: FormGroup;
    weather: string;
    isAdded: boolean;
    filterList: string[];
    measureList: string[];
    rowsList: (number | string)[];

    filtersGroup = {
        coords: true,
        temp: true,
        pressure: true,
        humidity: true,
        wind: true,
        overall: true
    };

    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {
        this.filterList = Object.keys(this.filtersGroup);
        this.measureList = ['Celsius', 'Kelvin'];
        this.rowsList = [
            Math.floor(constants.NUMBER_OF_CITIES / 5),
            Math.floor(constants.NUMBER_OF_CITIES / 2),
            Math.floor(constants.NUMBER_OF_CITIES / 1.3),
            constants.NUMBER_OF_CITIES,
            'all'
        ];

        this.filterForm = this.fb.group({
            columns: this.fb.group(this.filtersGroup),
            temperature: ['> -273', validateTemperatureRange],
            rows: [null, Validators.required],
            measure: [this.measureList[0], Validators.required],
            cityName: ['', Validators.minLength(3)]
        });
    }

    getWeather() {
        this.weather = this.filterForm.controls['cityName'].value;
        this.isAdded = false;
    }

    applyFilters(form) {
        this.store.dispatch(new meteo.FilterAction(form.value));
    }

    onAdd() {
        this.store.dispatch(new meteo.AddAction(this.weather));
        this.isAdded = true;
    }
}
