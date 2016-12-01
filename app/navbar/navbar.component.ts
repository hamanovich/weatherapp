import {Component} from '@angular/core';

@Component({
    selector: 'wapi-navbar',
    templateUrl: './navbar.component.html',
    styles: [`
    .navbar {
        border-radius: 0;
    }`]
})
export class NavbarComponent {
    public APP_NAME: string = 'Weather APP';
}
