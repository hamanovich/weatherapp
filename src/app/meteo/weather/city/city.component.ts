import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import City from '../../../models/city';

@Component({
    selector: '[wapi-city]',
    templateUrl: 'city.component.html',
    styleUrls: [ 'city.component.css' ]
})

export class CityComponent {
    @Input() city: City;
    @Output() remove: EventEmitter<number> = new EventEmitter<number>();
    
    onRemove() {
        this.remove.emit(0);
    }
}
