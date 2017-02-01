import { NgModule }     from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import {
    MeteoComponent,
    SearchComponent,
    WeatherComponent,
    CityComponent,
    IconWeatherComponent,
    WindComponent
} from './index';

import { MeteoService } from './meteo.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        WeatherComponent,
        CityComponent,
        SearchComponent,
        MeteoComponent,
        WindComponent,
        IconWeatherComponent
    ],
    providers: [ MeteoService ],
    exports: [ MeteoComponent ]
})

export class MeteoModule {
}
