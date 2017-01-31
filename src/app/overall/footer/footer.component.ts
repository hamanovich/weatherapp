import { Component } from '@angular/core';

@Component({
    selector: 'wapi-footer',
    templateUrl: 'footer.component.html',
    styleUrls: [ 'footer.component.css' ]
})

export class FooterComponent {
    year: number;
    
    constructor() {
        this.year = new Date().getFullYear();
    }
}
