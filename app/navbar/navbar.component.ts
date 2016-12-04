import {Component} from '@angular/core';

@Component({
    selector: 'wapi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public APP_NAME: string = 'Weather APP';
}