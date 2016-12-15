import {Component, EventEmitter, Input, Output} from '@angular/core';

import City from '../models/city.interface';

@Component({
    selector: '[wapi-city]',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})

export class CityComponent {
    @Input() city: City;
    @Output() remove = new EventEmitter<number>();

    onRemove() {
        this.remove.emit(0);
    }
}