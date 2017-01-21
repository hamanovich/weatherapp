import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {MeteoService} from '../../meteo/meteo.service';

import CurrentPosition from '../../models/position.interface';
import City            from '../../models/city.interface';

import * as constants from '../../constants';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JumbotronComponent implements OnInit {
    APP_TITLE: string;
    yourWeather: Observable<City>;

    @Input() position: CurrentPosition;

    constructor(private meteoService: MeteoService) {
        this.APP_TITLE = constants.APP_TITLE;
    }

    ngOnInit() {
        this.yourWeather = this.meteoService
            .getCities(`${constants.GEO_URL}weather?lat=${this.position.coords.latitude}&lon=${this.position.coords.longitude}&appid=${constants.GEO_API_KEY}`)
            .map((n: {weather: [{description: string}]}) => n.weather[0].description);
    }
}