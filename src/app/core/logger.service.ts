import { Injectable } from "@angular/core";
import { Logger } from './logger';

@Injectable()
export class LoggerService extends Logger {
    log(message: string | number): void {
        console.log(`%c[DEV] ---> ${message}`, `color : black`);
    }

    succs(message: string | number): void {
        console.log(`%c[DEV] ---> ${message}`, `color : green`);
    }

    warn(message: string | number): void {
        console.warn(`%c[DEV] ---> ${message}`, `color : darkgoldenrod`);
    }

    info(message: string | number): void {
        console.info(`%c[DEV] ---> ${message}`, `color : blue`);
    }

    error(message: string | number): void {
        console.error(`%c[DEV] ---> ${message}`, `color : red`);
    }
}
