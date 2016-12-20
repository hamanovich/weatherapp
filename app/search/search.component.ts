import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

import {Capitalize} from '../pipes/capitalize.pipe';

@Component({
    selector: 'wapi-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    cityName: FormControl;
    searchForm: FormGroup;
    weather: string;

    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private fb: FormBuilder) {
        this.cityName = new FormControl();
        this.searchForm = fb.group({
            cityName: this.cityName
        });
    }

    getWeather() {
        this.weather = new Capitalize().transform(this.cityName.value);
        this.searchForm.reset();
    }

    onAdd() {
        this.add.emit(this.weather);
    }
}