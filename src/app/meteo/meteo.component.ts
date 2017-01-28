import {Component, Input} from '@angular/core';

import CurrentPosition from '../models/position';

@Component({
    selector: 'wapi-meteo',
    templateUrl: './meteo.component.html'
})

export class MeteoComponent {
    @Input() position: CurrentPosition;

    constructor() {
    }
}