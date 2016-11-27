export default class Geo {
    constructor() {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }
    }

    private getPosError(): void {
        console.error('Unable to retrieve your location');
    }

    public getPosition(callback: (p: Position) => void): void {
        navigator.geolocation
            .getCurrentPosition(callback.bind(this), this.getPosError);
    }
}