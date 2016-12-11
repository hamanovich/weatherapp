import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

import {Capitalize} from '../pipes/capitalize.pipe';
import {WeatherService} from '../weather/weather.service';
import * as constants from '../constants';

import City from '../models/city.interface';

@Component({
    selector: 'wapi-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    cityName: FormControl;
    searchForm: FormGroup;
    city: string;
    weather: City;

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
        const cachedNames = constants.cityCache.map(n => n['name']);

        if (cachedNames.indexOf(this.city) !== -1) {
            this.weather = constants.cityCache[cachedNames.indexOf(this.city)];
            this.searchForm.reset();

            return;
        }

        this.weatherService.getCities(`${constants.GEO_URL}weather?q=${this.city}&appid=${constants.GEO_API_KEY}`)
            .subscribe(
                data => {
                    this.weather = data;
                    this.searchForm.reset();
                }
            );
    }
}