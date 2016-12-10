// Import Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Components
import {AppComponent}  from './app.component';
import {NavbarComponent}  from './navbar/navbar.component';
import {JumbotronComponent}  from './jumbotron/jumbotron.component';
import {FooterComponent}  from './footer/footer.component';
import {GoogleMapComponent}  from './google-map/google-map.component';
import {WeatherComponent}  from './weather/weather.component';
import {CityComponent}  from './city/city.component';
import {SearchComponent}  from './search/search.component';

// Import Services
import {GoogleMapService} from './google-map/google-map.service';
import {WeatherService} from './weather/weather.service';

// Import Pipes
import {KelvinToCelsius} from './pipes/celsius.pipe';
import {CityWeather} from './pipes/city.weather.pipe';
import {Capitalize} from './pipes/capitalize.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        JumbotronComponent,
        FooterComponent,
        GoogleMapComponent,
        WeatherComponent,
        CityComponent,
        SearchComponent,
        KelvinToCelsius,
        CityWeather,
        Capitalize
    ],
    providers: [
        GoogleMapService,
        WeatherService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}