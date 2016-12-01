import {Component} from '@angular/core';

@Component({
    selector: 'wapi-footer',
    templateUrl: './footer.component.html',
    styles: [`
    .footer {
        padding: 2em 0;
        margin-top: 3em;
        color: #fff;
        text-align: center;
        background-color: #2a2730;
    }
    
    p {
        margin: 0;
    }`]
})

export class FooterComponent {
}