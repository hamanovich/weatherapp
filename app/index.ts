import "./styles/index.scss";

import GMap from './gmap';
import Geo from './geo';
import Weather from './weather';

let map: GMap = new GMap;
let geo: Geo = new Geo();
let weather: Weather = new Weather();

geo.getPosition((position: Position) => {
    weather.init(position, 30);

    map.init(position, { zoom: 13 });
});