import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { validateTemperatureRange } from '../../shared/validators/temperature-range.validator';

import { Store } from '@ngrx/store';
import * as meteo from '../../dataflow/actions/meteo.actions';
import * as fromRoot from '../../dataflow/reducers';

@Component({
    selector: 'wapi-form-filter',
    templateUrl: 'form-filter.component.html',
    styleUrls: ['form-filter.component.css']
})

export class FormFilterComponent {
    cityName: AbstractControl;
    filterForm: FormGroup;
    weather: string;
    isAdded: boolean;
    filterList: string[];
    measureList: string[];
    rowList: number[];

    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {
        this.filterList = ['ID', 'Coords', 'Temp', 'Pressure', 'Humidity', 'Wind', 'Overall'];
        this.measureList = ['Celsius', 'Kelvin'];
        this.rowList = [5, 10, 20, 50];

        this.filterForm = this.fb.group({
            cityName: ['', Validators.minLength(3)],
            filters: this.fb.group({
                ID: true,
                Coords: true,
                Temp: true,
                Pressure: true,
                Humidity: true,
                Wind: true,
                Overall: true
            }),
            temperature: ['', validateTemperatureRange],
            measure: ['Celsius', Validators.required],
            row: ['']
        });

        this.cityName = this.filterForm.controls['cityName'];
    }

    getWeather() {
        this.weather = this.cityName.value;
        this.isAdded = false;
    }

    applyFilters(form) {
        console.log('submit value->', form.value);
    }

    onAdd() {
        this.store.dispatch(new meteo.AddAction(this.weather));
        this.isAdded = true;
    }
}
