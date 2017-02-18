import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { validateTemperatureRange } from '../../shared/validators/temperature-range.validator';

import { Store } from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

import { NUMBER_OF_CITIES, MEASURES } from '../../constants';
import FilterColumns from '../../models/filter.columns';

import * as messages from './messages';

@Component({
    selector: 'wapi-form-filter',
    templateUrl: 'form-filter.component.html',
    styleUrls: ['form-filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFilterComponent implements OnInit {
    filterForm: FormGroup;
    weather: string;
    isAdded: boolean;
    filterList: string[];
    measureList: string[];
    rowsList: (number | string)[];

    filtersGroup: FilterColumns = {
        coords: true,
        temp: true,
        pressure: true,
        humidity: true,
        wind: true,
        overall: true
    };

    messages: any = {
        temperature: messages.temperatureMessages,
        rows: messages.rowsMessages,
        city: messages.cityMessages
    };

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {
        this.filterList = Object.keys(this.filtersGroup);
        this.measureList = MEASURES;
        this.rowsList = [
            Math.floor(NUMBER_OF_CITIES / 5),
            Math.floor(NUMBER_OF_CITIES / 2),
            Math.floor(NUMBER_OF_CITIES / 1.3),
            NUMBER_OF_CITIES,
            'all'
        ];
    }

    ngOnInit() {
        this.filterForm = this.fb.group({
            columns: this.fb.group(this.filtersGroup),
            temperature: ['', Validators.compose([Validators.required, validateTemperatureRange])],
            rows: ['', Validators.required],
            measure: [this.measureList[0], Validators.required],
            toggle: [false],
            city: ['', Validators.minLength(3)]
        });
    }

    getWeather(): void {
        this.weather = this.filterForm.get('city').value;
        this.isAdded = false;
    }

    applyFilters(form: AbstractControl): void {
        this.store.dispatch(new meteo.FilterAction(form.value));
    }

    onAdd(): void {
        this.store.dispatch(new meteo.AddAction(this.weather));
        this.filterForm.get('city').reset();
        this.isAdded = true;
        this.weather = null;
    }
}
