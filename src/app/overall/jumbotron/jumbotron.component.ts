import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import {Subscription} from "rxjs/Subscription";

import {Store} from '@ngrx/store';
import {MeteoState} from '../../reducers';

import Meteo from '../../models/meteo';
import CurrentPosition from '../../models/position';

import * as constants from '../../constants';

@Component({
    selector: 'wapi-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css']
})

export class JumbotronComponent implements OnInit, OnDestroy {
    APP_TITLE: string;
    weather: string;
    url: string;
    subscription: Subscription;

    @Input() position: CurrentPosition;

    constructor(private store: Store<MeteoState>) {
        this.APP_TITLE = constants.APP_TITLE;
    }

    ngOnInit() {
        this.subscription = this.store
            .select((s: MeteoState) => s.meteo)
            .subscribe((data: Meteo): void => {
                this.weather = data.weather
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
