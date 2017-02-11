import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import City from '../../../models/city';

import { API_URL_ICON } from '../../../constants';

@Component({
    templateUrl: 'weather-details.component.html'
})

export class WeatherDetailsComponent implements OnInit {
    city: City;
    path: string = API_URL_ICON;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.city = this.route.snapshot.data['weatherDetails'];
    }
}
