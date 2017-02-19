import { Component } from '@angular/core';

import { APP_TITLE, GOOGLE_URL, API_URL } from "../../constants";

@Component({
    selector: 'wapi-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
    APP_TITLE: string = APP_TITLE;
    GOOGLE_URL: string = GOOGLE_URL;
    API_URL: string = API_URL;
}
