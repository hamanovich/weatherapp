import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { GoogleMapService } from './google-map.service';

import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import * as fromRoot from '../dataflow/reducers';
import { Observable } from 'rxjs/Observable';

import Coords from '../models/coords';

@Component({
    templateUrl: './google-map.component.html',
    styleUrls: ['google-map.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GoogleMapComponent implements OnInit {
    GOOGLE_MAP_TITLE: string = 'Google Map';
    GOOGLE_MAP_TITLE_SUB: string = 'Maps JavaScript API';

    subscription: Subscription;
    position: Observable<Coords>;

    @ViewChild('googleMapElement') googleMapElememt: ElementRef;

    constructor(private gMapService: GoogleMapService,
                private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.store.select(fromRoot.getGeoCoords).subscribe((position: Coords) => {
            if (position) {
                this.gMapService.init(position, this.googleMapElememt.nativeElement);
            }
        });
    }
}
