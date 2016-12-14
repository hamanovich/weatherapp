import {Component, Input} from '@angular/core';

@Component({
    selector: 'wapi-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    @Input() test:number;
}