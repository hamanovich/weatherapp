import {
    Component,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../dataflow/reducers';

import CurrentPosition from '../../models/position';

import * as constants from '../../constants';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JumbotronComponent {
    APP_TITLE: string;
    weather: Observable<string>;

    @Input() position: CurrentPosition;

    constructor(private store: Store<fromRoot.State>) {
        this.APP_TITLE = constants.APP_TITLE;
        this.weather = this.store.select(fromRoot.getWeatherDescription);
    }
}
