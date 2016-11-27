import MapOptions from './models/map.options.interface';
import * as constants from './constants';

export default class GMap {
    private gMap: google.maps.Map;
    private marker: google.maps.Marker;
    private options: MapOptions;

    public init(position: Position, options?: MapOptions) {
        const coords = position.coords;
        const pos = {
            lat: coords.latitude,
            lng: coords.longitude
        };

        this.options = {
            center: pos,
            zoom: 12
        };

        options = Object.assign({}, this.options, options || {});

        this.gMap = new google.maps.Map(constants.googleMap, options);
        this.marker = new google.maps.Marker({
            position: pos,
            map: this.gMap,
            title: 'Demo marker'
        });
    }
}