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
import {WeatherComponent}  from './weather/weather.component';
import {CityComponent}  from './city/city.component';

// Import Services
import {GoogleMapService} from './google-map/google-map.service';
import {WeatherService} from './weather/weather.service';

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
        WeatherComponent,
        CityComponent
    ],
    providers: [
        GoogleMapService,
        WeatherService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}