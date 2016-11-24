/// <reference path="../typings/globals/google.maps/index.d.ts" />

import IGmapOpts from './iGmapOpts.interface';

export default class GMap {
    private mapEl   : Element;
    private gMap    : google.maps.Map;
    private options : IGmapOpts;
    private marker  : google.maps.Marker;

    public init() {
        const pos = {lat: 53.9269215, lng: 27.681517699999997};

        this.mapEl = document.getElementById("google-map");
        this.options = {
            center: pos,
            zoom: 12
        };
        this.gMap = new google.maps.Map(this.mapEl, this.options);
        this.marker = new google.maps.Marker({
            position: pos,
            map: this.gMap,
            title: 'Demo marker'
        });
    }
}