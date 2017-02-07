import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import Wind from '../../../../models/wind';

@Component({
    selector: 'wapi-wind',
    templateUrl: 'wind.component.html',
    styleUrls: ['wind.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WindComponent {
    @Input('windWeather') wind: Wind;
}
