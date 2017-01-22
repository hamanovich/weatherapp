import {NgModule}      from '@angular/core';
import {CommonModule} from "@angular/common";
import {
    NavbarComponent,
    JumbotronComponent,
    FooterComponent
} from './index';

@NgModule({
    imports: [
        CommonModule
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
