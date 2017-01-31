import { NgModule }           from '@angular/core';
import { CommonModule }       from "@angular/common";
import { GoogleMapComponent } from './google-map.component';
import { GoogleMapService }   from './google-map.service';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ GoogleMapComponent ],
    providers: [ GoogleMapService ],
    exports: [ GoogleMapComponent ]
})

export class GoogleMapModule {
}
