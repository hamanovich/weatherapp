// Import Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

// Import Components
import {AppComponent}  from './app.component';
import {NavbarComponent}  from './navbar/navbar.component';
import {JumbotronComponent}  from './jumbotron/jumbotron.component';
import {FooterComponent}  from './footer/footer.component';
import {GoogleMapComponent}  from './google-map/google-map.component';
import {WeatherComponent}  from './meteo/weather/weather.component';
import {CityComponent}  from './meteo/weather/city/city.component';
import {SearchComponent}  from './meteo/search/search.component';
import {MeteoComponent}  from './meteo/meteo.component';
import {WindComponent}  from './meteo/weather/city/wind/wind.component';
import {IconWeatherComponent} from './meteo/weather/city/icon-weather/icon-weather.component';

// Import Directives
import {ColorWeather} from './directives/color-weather.directive';
import {WindWeather} from './directives/wind-weather.directive';

// Import Services
import {GoogleMapService} from './google-map/google-map.service';
import {WeatherService} from './meteo/weather/weather.service';
import {ZoneService} from './zone.service';

// Import Pipes
import {KelvinToCelsius} from './pipes/celsius.pipe';
import {CityWeather} from './pipes/city.weather.pipe';
import {Capitalize} from './pipes/capitalize.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
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
        MeteoComponent,
        WindComponent,
        IconWeatherComponent,
        KelvinToCelsius,
        CityWeather,
        Capitalize,
        ColorWeather,
        WindWeather
    ],
    providers: [
        GoogleMapService,
        WeatherService,
        ZoneService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
