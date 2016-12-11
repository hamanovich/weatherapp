import City from './models/city.interface';

export const GEO_API_KEY: string = '07544e7bd3442c641181e2b651145b42';
export const GEO_URL: string = 'http://api.openweathermap.org/data/2.5/';

export const API_URL: string = 'http://openweathermap.org/api';
export const GOOGLE_URL: string = 'https://developers.google.com/maps/';

export const NUMBER_OF_CITIES: number = 10;
export const TEMP_DIFFERENCE: number = 273;

export let cityCache: City[] = [];