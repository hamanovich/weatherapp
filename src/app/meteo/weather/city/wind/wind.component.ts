import { Component, Input } from '@angular/core';

import Wind from '../../../../models/wind';

@Component({
    selector: 'wapi-wind',
    templateUrl: 'wind.component.html',
    styleUrls: ['wind.component.css']
})

export class WindComponent {
    @Input() wind: Wind;
}
