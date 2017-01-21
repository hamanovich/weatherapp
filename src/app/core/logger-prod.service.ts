import {Injectable} from "@angular/core";

@Injectable()
export class LoggerProdService {
    constructor() {
    }

    log(message: string | number): void {
        console.log(`%c[PROD] ---> ${message}`, `color : black`);
    }

    succs(message: string | number): void {
        console.log(`%c[PROD] ---> ${message}`, `color : green`);
    }

    warn(message: string | number): void {
        console.warn(`%c[PROD] ---> ${message}`, `color : darkgoldenrod`);
    }

    info(message: string | number): void {
        console.info(`%c[PROD] ---> ${message}`, `color : blue`);
    }

    error(message: string | number): void {
        console.error(`%c[PROD] ---> ${message}`, `color : red`);
    }
}