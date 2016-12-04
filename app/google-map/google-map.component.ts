import {Component, Input, AfterViewInit, OnChanges, ViewChild, ElementRef} from '@angular/core';

import {GoogleMapService} from './google-map.service';

import CurrentPosition from '../models/position.interface';

import * as constants from '../constants';

@Component({
    selector: 'wapi-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent implements AfterViewInit, OnChanges {
    public GOOGLE_MAP_TITLE: string = 'Google Map';
    public GOOGLE_MAP_TITLE_SUB: string = 'Maps JavaScript API';
    public GOOGLE_URL: string = constants.GOOGLE_URL;

    @Input() position: CurrentPosition;
    @ViewChild('googleMapElement') googleMapElememt: ElementRef;

    constructor(private gooMapService: GoogleMapService) {
    }

    ngAfterViewInit() {
        this.gooMapService.init(this.position, this.googleMapElememt.nativeElement);
    }

    ngOnChanges() {
        this.gooMapService.init(this.position, this.googleMapElememt.nativeElement);
    }
}
