import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomRequestOptions } from './custom-request.options';

import { CityWeather } from './pipes/city.weather.pipe';
import { Celsius }     from './pipes/celsius.pipe';
import { Measure }     from './pipes/measure.pipe';

import { ColorWeather } from './directives/color-weather.directive';
import { WindWeather }  from './directives/wind-weather.directive';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        CityWeather,
        Celsius,
        Measure,
        ColorWeather,
        WindWeather
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        CityWeather,
        Celsius,
        Measure,
        ColorWeather,
        WindWeather
    ],
    providers: [
        {
            provide: RequestOptions,
            useClass: CustomRequestOptions
        }
    ]
})

export class SharedModule {
}
