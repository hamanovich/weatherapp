import { Component, Input } from '@angular/core';

import Coords from '../models/coords';

@Component({
    selector: 'wapi-meteo',
    templateUrl: './meteo.component.html'
})

export class MeteoComponent {
    @Input() position: Coords;
    
    constructor() {
    }
}
