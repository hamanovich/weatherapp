import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {Capitalize} from '../pipes/capitalize.pipe';

import {WeatherService} from '../weather/weather.service';
import City from '../models/city.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    cityName: FormControl;
    searchForm: FormGroup;
    weather: string;

    @Output() add = new EventEmitter<City[]>();

    constructor(
        private fb: FormBuilder,
        private weatherService: WeatherService) {
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
        this.weatherService
            .getCities(`${constants.GEO_URL}weather?q=${this.weather}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                city => {
                    this.add.emit([city]);
                }
            );
    }
}