export abstract class Logger {
    abstract log(message: string | number): void;
    abstract succs(message: string | number): void;
    abstract warn(message: string | number): void;
    abstract info(message: string | number): void;
    abstract error(message: string | number): void;
}
