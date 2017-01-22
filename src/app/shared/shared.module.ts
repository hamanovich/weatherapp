import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {HttpModule}          from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {CityWeather} from './pipes/city.weather.pipe';
import {Celsius}     from './pipes/celsius.pipe';

import {ColorWeather} from './directives/color-weather.directive';
import {WindWeather}  from './directives/wind-weather.directive';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        CityWeather,
        Celsius,
        ColorWeather,
        WindWeather
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        CityWeather,
        Celsius,
        ColorWeather,
        WindWeather
    ]
})

export class SharedModule {
}
