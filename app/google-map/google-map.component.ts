import {
    Component,
    Input,
    OnChanges,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';

import {GoogleMapService} from './google-map.service';

import CurrentPosition from '../models/position.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GoogleMapComponent implements OnChanges {
    GOOGLE_MAP_TITLE: string;
    GOOGLE_MAP_TITLE_SUB: string;
    GOOGLE_URL: string;

    @Input() position: CurrentPosition;
    @ViewChild('googleMapElement') googleMapElememt: ElementRef;

    constructor(private gooMapService: GoogleMapService) {
        this.GOOGLE_MAP_TITLE = 'Google Map';
        this.GOOGLE_MAP_TITLE_SUB = 'Maps JavaScript API';
        this.GOOGLE_URL = constants.GOOGLE_URL;
    }

    ngOnChanges() {
        this.gooMapService.init(this.position, this.googleMapElememt.nativeElement);
    }
}
