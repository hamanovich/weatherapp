import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {CoreModule}      from './core/core.module';
import {OverallModule}   from './overall/overall.module';
import {GoogleMapModule} from './google-map/google-map.module';
import {MeteoModule}     from './meteo/meteo.module';

import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {MeteoEffects} from './effects';
import {MeteoActions} from './actions';
import {reducer} from './reducers';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        OverallModule,
        MeteoModule,
        GoogleMapModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(MeteoEffects),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [MeteoActions],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}