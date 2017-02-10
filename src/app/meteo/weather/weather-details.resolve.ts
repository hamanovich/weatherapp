import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MeteoService } from '../meteo.service';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import City from '../../models/city';

@Injectable()
export class WeatherDetailsResolve implements Resolve<any> {
    constructor(private meteoService: MeteoService,
        private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<City> {
        let id: number = route.params['id'];

        return this.meteoService.getCityById(id).map((city: City) => {
            if (city) {
                return city;
            } else {
                this.router.navigate(['/meteo']);

                return null;
            }
        });
    }
}
