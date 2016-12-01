import {Component, Input} from '@angular/core';

import City from '../models/city.interface';

@Component({
    selector: '[wapi-city]',
    templateUrl: './city.component.html'
})

export class CityComponent {
    @Input() city: City;

    constructor() {
    }
}