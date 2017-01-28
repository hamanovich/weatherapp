import City from './city';
import {Response} from "@angular/http";

interface Meteo {
    cities?: City[];
    citiesCache?: City[];
    weather?: string;
    error?: Response;
}

export default Meteo;