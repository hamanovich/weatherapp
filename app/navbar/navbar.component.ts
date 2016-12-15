import {Component} from '@angular/core';
import {APP_BRAND} from "../constants";

@Component({
    selector: 'wapi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    APP_BRAND: string;

    constructor() {
        this.APP_BRAND = APP_BRAND;
    }
}