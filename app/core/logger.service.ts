import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService {
    constructor() {
    }

    log(message: string | number): void {
        console.log(`%c${message}`, `color : black`);
    }

    succs(message: string | number): void {
        console.log(`%c${message}`, `color : green`);
    }

    warn(message: string | number): void {
        console.warn(`%c${message}`, `color : darkgoldenrod`);
    }

    info(message: string | number): void {
        console.info(`%c${message}`, `color : blue`);
    }

    error(message: string | number): void {
        console.error(`%c${message}`, `color : red`);
    }
}