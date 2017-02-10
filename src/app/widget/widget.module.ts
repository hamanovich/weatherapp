import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { WidgetComponent } from './widget.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [WidgetComponent],
    exports: [WidgetComponent]
})

export class WidgetModule {
}
