/// <reference path="../../node_modules/@types/google-maps/index.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GoogleMapService = (function () {
    function GoogleMapService() {
    }
    GoogleMapService.prototype.init = function (position, options) {
        var coords = position.coords;
        var pos = {
            lat: coords.latitude,
            lng: coords.longitude
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
    };
    GoogleMapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GoogleMapService);
    return GoogleMapService;
}());
exports.GoogleMapService = GoogleMapService;
//# sourceMappingURL=google-map.service.js.map