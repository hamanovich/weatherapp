import {NgModule}      from '@angular/core';
import {CommonModule} from "@angular/common";
import {MeteoModule} from '../meteo/meteo.module';
import {
    NavbarComponent,
    JumbotronComponent,
    FooterComponent
} from './index';

@NgModule({
    imports: [
        CommonModule,
        MeteoModule
    ],
    declarations: [
        NavbarComponent,
        JumbotronComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent,
        JumbotronComponent,
        FooterComponent
    ]
})

export class OverallModule {
}