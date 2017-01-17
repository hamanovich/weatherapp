import {Component} from '@angular/core';

@Component({
    selector: 'wapi-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent {
    private year: number;

    constructor() {
        this.year = new Date().getFullYear();
    }
}