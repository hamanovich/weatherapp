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
var google_map_service_1 = require('../google-map/google-map.service');
var geo_service_1 = require('./geo.service');
var http_service_1 = require("../http.service");
var constants = require('../constants');
var GeoComponent = (function () {
    function GeoComponent(gooMapService, geoService, httpService) {
        this.gooMapService = gooMapService;
        this.geoService = geoService;
        this.httpService = httpService;
        this.cities = [];
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }
    }
    GeoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geoService.getPosition(function (position) {
            var coords = position.coords;
            _this.httpService.getCities(constants.GEO_URL + "find?lat=" + coords.latitude + "&lon=" + coords.longitude + "\n            &cnt=2&appid=" + constants.GEO_API_KEY)
                .subscribe(function (data) {
                data = data.list;
                for (var city in data) {
                    if (data.hasOwnProperty(city)) {
                        _this.cities.push(data[city]);
                    }
                }
                _this.tableCities.nativeElement
                    .classList.add('done');
            });
            _this.gooMapService.init(position, { zoom: 13 });
        });
    };
    __decorate([
        core_1.ViewChild('tableCities'), 
        __metadata('design:type', core_1.ElementRef)
    ], GeoComponent.prototype, "tableCities", void 0);
    GeoComponent = __decorate([
        core_1.Component({
            selector: 'wapi-geo',
            templateUrl: './geo.component.html',
            styleUrls: ['./geo.component.scss']
        }), 
        __metadata('design:paramtypes', [google_map_service_1.GoogleMapService, geo_service_1.GeoService, http_service_1.HttpService])
    ], GeoComponent);
    return GeoComponent;
}());
exports.GeoComponent = GeoComponent;
//# sourceMappingURL=geo.component.js.map