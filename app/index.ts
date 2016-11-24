import "./styles/index.scss";

import GMap from './gmap';
import Geo from './geo';

new GMap().init();
new Geo(50).getPosition();