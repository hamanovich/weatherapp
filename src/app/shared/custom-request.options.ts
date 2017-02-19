import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Headers, BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { GEO_URL } from '../constants';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        const date: any = new DatePipe('en').transform(new Date(), 'medium');

        options.url = GEO_URL + options.url;

        if (options.headers) {
            options.headers.append("Accept", date);
        } else {
            options.headers = new Headers({"Accept": date});
        }

        return super.merge(options);
    }
}
