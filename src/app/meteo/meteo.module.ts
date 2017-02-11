import { NgModule }     from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import { MeteoRoutingModule } from './meteo-routing.module';

import {
    MeteoComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    FormFilterComponent,
    SwitcherComponent,
    InputErrorsComponent,
    CityComponent,
    IconWeatherComponent,
    WindComponent
} from './index';

import { MeteoService } from './meteo.service';
import { WeatherDetailsResolve } from './weather/weather-details.resolve';

@NgModule({
    imports: [
        SharedModule,
        MeteoRoutingModule
    ],
    declarations: [
        WeatherComponent,
        WeatherDetailsComponent,
        CityComponent,
        FormFilterComponent,
        SwitcherComponent,
        InputErrorsComponent,
        MeteoComponent,
        WindComponent,
        IconWeatherComponent
    ],
    providers: [
        MeteoService,
        WeatherDetailsResolve
    ],
    exports: [MeteoComponent]
})

export class MeteoModule {
}
