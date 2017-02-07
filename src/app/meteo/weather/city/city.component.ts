import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

import City from '../../../models/city';
import FilterColumns from '../../../models/filter.columns';

@Component({
    selector: '[wapi-city]',
    templateUrl: 'city.component.html',
    styleUrls: ['city.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CityComponent {
    @Input() city: City;
    @Input() columns: FilterColumns;
    @Output() remove: EventEmitter<number> = new EventEmitter<number>();

    onRemove() {
        this.remove.emit(0);
    }
}
