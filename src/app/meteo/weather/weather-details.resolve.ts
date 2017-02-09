import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MeteoService } from '../meteo.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherDetailsResolve implements Resolve<any> {
    constructor(private meteoService: MeteoService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.meteoService.getCityById(route.params['id']);
    }
}
