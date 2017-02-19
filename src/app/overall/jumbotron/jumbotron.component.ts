import { Component, Input } from '@angular/core';

import City from '../../models/city';

import { APP_TITLE } from '../../constants';
import { Observable } from "rxjs";

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css']
})

export class JumbotronComponent {
    APP_TITLE: string = APP_TITLE;

    @Input() city: Observable<City>;
}
