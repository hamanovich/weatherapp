import { Component, Input } from '@angular/core';

import City from '../../models/city';
import Coords from '../../models/coords';

import * as constants from '../../constants';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css']
})

export class JumbotronComponent{
    APP_TITLE: string = constants.APP_TITLE;

    @Input() city: City;
    @Input() position: Coords;
}
