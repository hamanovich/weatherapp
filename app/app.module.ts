import {NgModule}        from '@angular/core';
import {BrowserModule}   from '@angular/platform-browser';
import {CoreModule}      from './core/core.module';
import {OverallModule}   from './overall/overall.module';
import {GoogleMapModule} from './google-map/google-map.module';
import {MeteoModule}     from './meteo/meteo.module';

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        OverallModule,
        MeteoModule,
        GoogleMapModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}