import {Injectable} from '@angular/core';

import MapOptions from '../models/map.options';
import Coords from "../models/coords";

@Injectable()
export class GoogleMapService {
    private gMap: google.maps.Map;
    private marker: google.maps.Marker;
    private options: MapOptions;

    init(position: Coords, el: Element, options?: MapOptions): void {
        const pos: {lat: number, lng: number} = {
            lat: position.latitude,
            lng: position.longitude
        };

        this.options = {
            center: pos,
            zoom: 15,
            scrollwheel: false
        };

        options = Object.assign(this.options, options || {});

        this.gMap = new google.maps.Map(el, options);
        this.marker = new google.maps.Marker({
            position: pos,
            map: this.gMap,
            title: 'I\'m here'
        });
    }
}
