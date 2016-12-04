import {Component, Input, AfterViewInit, OnChanges} from '@angular/core';

import {GoogleMapService} from './google-map.service';

import CurrentPosition from '../models/position.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent implements AfterViewInit, OnChanges {
    private GOOGLE_MAP_TITLE: string = 'Google Map';
    private GOOGLE_MAP_TITLE_SUB: string = 'Maps JavaScript API';
    private GOOGLE_URL: string = constants.GOOGLE_URL;
    private googleMapId: string = constants.googleMapID;

    @Input() position: CurrentPosition;

    constructor(private gooMapService: GoogleMapService) {
    }

    ngAfterViewInit() {
        this.gooMapService.init(this.position, {zoom: 13});
    }

    ngOnChanges() {
        if (!document.getElementById(this.googleMapId)) {
            return false;
        }
        this.gooMapService.init(this.position, {zoom: 13});
    }
}
