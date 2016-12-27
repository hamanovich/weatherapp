import {Component, Input} from '@angular/core';

import Wind from '../models/wind.interface';

@Component({
    selector: 'wapi-wind',
    templateUrl: './wind.component.html',
    styleUrls: ['./wind.component.scss']
})

export class WindComponent {
    @Input('windWeather') wind: Wind;

    constructor() {
    }
}