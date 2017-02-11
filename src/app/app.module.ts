import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { CoreModule }      from './core/core.module';
import { OverallModule }   from './overall/overall.module';
import { GoogleMapModule } from './google-map/google-map.module';
import { MeteoModule }     from './meteo/meteo.module';
import { WidgetModule }     from './widget/widget.module';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MeteoEffects } from './dataflow/effects';
import { reducer } from './dataflow/reducers';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        MeteoModule,
        OverallModule,
        GoogleMapModule,
        WidgetModule,
        AppRoutingModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(MeteoEffects),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
