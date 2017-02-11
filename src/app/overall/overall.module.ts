import { NgModule }      from '@angular/core';
import { CommonModule } from "@angular/common";
import {AppRoutingModule} from '../app-routing.module';
import {
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    Page404Component
} from './index';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        NavbarComponent,
        JumbotronComponent,
        FooterComponent,
        Page404Component
    ],
    exports: [
        NavbarComponent,
        JumbotronComponent,
        FooterComponent,
        Page404Component
    ]
})

export class OverallModule {
}
