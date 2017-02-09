import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';

import { GoogleMapService } from './google-map.service';

import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import * as fromRoot from '../dataflow/reducers';
import { Observable } from "rxjs/Observable";

import Coords from "../models/coords";

@Component({
    selector: 'wapi-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['google-map.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GoogleMapComponent implements OnInit, OnDestroy {
    GOOGLE_MAP_TITLE: string;
    GOOGLE_MAP_TITLE_SUB: string;

    subscription: Subscription;
    position: Observable<Coords>;

    @ViewChild('googleMapElement') googleMapElememt: ElementRef;

    constructor(private gMapService: GoogleMapService,
                private store: Store<fromRoot.State>) {
        this.GOOGLE_MAP_TITLE = 'Google Map';
        this.GOOGLE_MAP_TITLE_SUB = 'Maps JavaScript API';
    }

    ngOnInit() {
        this.subscription = this.store.select(fromRoot.getGeoCoords).subscribe((position: Coords) => {
            if (position) {
                this.gMapService.init(position, this.googleMapElememt.nativeElement);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
