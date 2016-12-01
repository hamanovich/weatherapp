import {Component} from '@angular/core';

@Component({
    selector: 'wapi-google-map',
    templateUrl: './google-map.component.html',
    styles: [`
    #google-map {
        width: 100%;
        height: 500px;
        margin: auto;
    }`]
})

export class GoogleMapComponent {
    public GOOGLE_MAP_TITLE: string = 'Google Map';
    public GOOGLE_MAP_TITLE_SUB: string = 'Maps JavaScript API';
}
