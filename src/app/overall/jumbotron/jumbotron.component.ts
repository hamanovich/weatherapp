import { Component, Input } from '@angular/core';

import City from '../../models/city';

import * as constants from '../../constants';
import { Observable } from "rxjs";

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css']
})

export class JumbotronComponent {
    APP_TITLE: string = constants.APP_TITLE;

    @Input() city: Observable<City>;
}
