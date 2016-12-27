import {
    Component,
    Input,
    OnInit,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';

import {GoogleMapService} from './google-map.service';

import CurrentPosition from '../models/position.interface';

@Component({
    selector: 'wapi-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GoogleMapComponent implements OnInit {
    GOOGLE_MAP_TITLE: string;
    GOOGLE_MAP_TITLE_SUB: string;

    @Input() position: CurrentPosition;
    @ViewChild('googleMapElement') googleMapElememt: ElementRef;

    constructor(private gMapService: GoogleMapService) {
        this.GOOGLE_MAP_TITLE = 'Google Map';
        this.GOOGLE_MAP_TITLE_SUB = 'Maps JavaScript API';
    }

    ngOnInit() {
        this.gMapService.init(this.position, this.googleMapElememt.nativeElement);
    }
}
