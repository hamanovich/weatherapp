// Import Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Import Components
import {AppComponent}  from './app.component';
import {NavbarComponent}  from './navbar/navbar.component';
import {JumbotronComponent}  from './jumbotron/jumbotron.component';
import {FooterComponent}  from './footer/footer.component';
import {GoogleMapComponent}  from './google-map/google-map.component';
import {GeoComponent}  from './geo/geo.component';
import {CityComponent}  from './geo/city.component';

// Import Services
import {GoogleMapService} from './google-map/google-map.service';
import {GeoService} from './geo/geo.service';
import {HttpService} from './http.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        JumbotronComponent,
        FooterComponent,
        GoogleMapComponent,
        GeoComponent,
        CityComponent
    ],
    providers: [
        HttpService,
        GoogleMapService,
        GeoService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}