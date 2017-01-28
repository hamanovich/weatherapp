/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import {Injectable} from '@angular/core';

import MapOptions from '../models/map.options';

@Injectable()
export class GoogleMapService {
    private gMap: google.maps.Map;
    private marker: google.maps.Marker;
    private options: MapOptions;

    init(position: Position, el: Element, options?: MapOptions) {
        const pos: {lat: number, lng: number} = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
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