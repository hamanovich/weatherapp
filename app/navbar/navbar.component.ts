import {Component} from '@angular/core';

import * as constants from "../constants";

@Component({
    selector: 'wapi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    APP_BRAND: string;
    GOOGLE_URL: string;
    API_URL: string;

    constructor() {
        this.APP_BRAND = constants.APP_BRAND;
        this.GOOGLE_URL = constants.GOOGLE_URL;
        this.API_URL = constants.API_URL;
    }
}