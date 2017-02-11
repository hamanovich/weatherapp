import { Component, Input } from '@angular/core';

import Coords from '../models/coords';

import { Store } from '@ngrx/store';
import * as fromRoot from '../dataflow/reducers';
import { Observable } from "rxjs";

@Component({
    selector: 'wapi-meteo',
    templateUrl: './meteo.component.html'
})

export class MeteoComponent {
    @Input() position: Observable<Coords>;

    constructor(private store: Store<fromRoot.State>) {
        this.position = this.store.select(fromRoot.getGeoCoords);
    }
}
