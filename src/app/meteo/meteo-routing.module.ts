import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent, WeatherDetailsComponent } from "./index";
import { WeatherDetailsResolve } from './weather/weather-details.resolve';

const meteoRoutes: Routes = [
    {
        path: 'meteo',
        component: MeteoComponent
    },
    {
        path: 'weatherDetails/:id',
        component: WeatherDetailsComponent,
        resolve: {
            weatherDetails: WeatherDetailsResolve
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(meteoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MeteoRoutingModule {
}
