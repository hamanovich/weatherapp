import {Injectable} from '@angular/core';

@Injectable()
export class GeoService {
    private getPosError(): void {
        console.error('Unable to retrieve your location');
    }

    public getPosition(callback: (p: Position) => void): void {
        navigator.geolocation
            .getCurrentPosition(callback.bind(this), this.getPosError);
    }

}