import {Injectable, OnDestroy, NgZone} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable()
export class ZoneService implements OnDestroy {
    private onZoneStableSub: Subscription;
    private onZoneUnstableSub: Subscription;
    private onZoneErrorSub: Subscription;

    constructor(private ngZone: NgZone) {
        this.onZoneStableSub = this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
        this.onZoneUnstableSub = this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
        this.onZoneErrorSub = this.ngZone.onError.subscribe(this.onZoneError.bind(this));
    }

    onZoneStable() {
        // console.info('Zone stable');
    }

    onZoneUnstable() {
        // console.info('Zone unstable');
    }

    onZoneError(error: Error) {
        console.error('Error', error instanceof Error ? error.message : 'Zone Error');
    }

    doAsync(outside: boolean = false, f: () => void): void {
        if (outside) {
            this.ngZone.runOutsideAngular(f.bind(this));
        } else {
            f();
        }
    }

    ngOnDestroy() {
        this.onZoneStableSub.unsubscribe();
        this.onZoneUnstableSub.unsubscribe();
        this.onZoneErrorSub.unsubscribe();
    }
}