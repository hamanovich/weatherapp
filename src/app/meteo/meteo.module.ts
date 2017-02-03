import { NgModule }     from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import {
    MeteoComponent,
    WeatherComponent,
    FormFilterComponent,
    SwitcherComponent,
    InputErrorsComponent,
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
        FormFilterComponent,
        SwitcherComponent,
        InputErrorsComponent,
        MeteoComponent,
        WindComponent,
        IconWeatherComponent
    ],
    providers: [ MeteoService ],
    exports: [ MeteoComponent ]
})

export class MeteoModule {
}
