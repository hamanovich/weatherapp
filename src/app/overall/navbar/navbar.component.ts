import { Component } from '@angular/core';

import * as constants from "../../constants";

@Component({
    selector: 'wapi-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
    APP_TITLE: string = constants.APP_TITLE;
    GOOGLE_URL: string = constants.GOOGLE_URL;
    API_URL: string = constants.API_URL;
}
