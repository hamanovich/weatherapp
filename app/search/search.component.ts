import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

import {Capitalize} from '../pipes/capitalize.pipe';
import {WeatherService} from '../weather/weather.service';
import * as constants from '../constants';

@Component({
    selector: 'wapi-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    cityName: FormControl;
    searchForm: FormGroup;
    city: string;
    weather: string;

    constructor(private weatherService: WeatherService,
                private fb: FormBuilder) {

        this.cityName = new FormControl();
        this.searchForm = fb.group({
            cityName: this.cityName
        });

        this.cityName.valueChanges
            .map(n => n)
            .subscribe(
                value => {
                    this.city = new Capitalize().transform(value);
                });
    }

    getWeather() {
       this.weather = this.city;
    }
}