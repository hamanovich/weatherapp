import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Store } from '@ngrx/store';
import * as fromRoot from '../../dataflow/reducers';

import * as measureTo from '../utils';

@Pipe({
    name: 'Measure'
})

export class Measure implements PipeTransform {
    constructor(private store: Store<fromRoot.State>) {
    }

    transform(temperature: number): number {
        const measure: Observable<string> = this.store.select(fromRoot.getWeatherFiltersMeasure);

        measure.subscribe((m: string) => {
            temperature = measureTo['kelvinTo' + m](temperature);
        });

        return temperature;
    }
}
