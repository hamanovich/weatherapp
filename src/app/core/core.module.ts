import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LoggerService } from './logger.service';
import { LoggerProdService } from './logger-prod.service';

@NgModule({
    imports: [CommonModule],
    providers: [
        LoggerService,
        {
            provide: LoggerService,
            useClass: (
                PRODUCTION ?
                    LoggerProdService :
                    LoggerService
            )
        }
    
    ]
})

export class CoreModule {
}
