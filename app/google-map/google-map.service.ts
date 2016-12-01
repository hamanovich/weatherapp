import {Injectable} from '@angular/core';

import MapOptions from '../models/map.options.interface';

@Injectable()
export class GoogleMapService {
    private gMap: google.maps.Map;
    private marker: google.maps.Marker;
    private options: MapOptions;

    public init(position: Position, options?: MapOptions) {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        this.options = {
            center: pos,
            zoom: 12
        };

        options = Object.assign(this.options, options || {});

        this.gMap = new google.maps.Map(document.getElementById("google-map"), options);
        this.marker = new google.maps.Marker({
            position: pos,
            map: this.gMap,
            title: 'Demo marker'
        });
    }
}