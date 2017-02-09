import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "./overall/page404/page404.component";
import { GoogleMapComponent } from './google-map/google-map.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'meteo',
        pathMatch: 'full'
    },
    {
        path: 'map',
        component: GoogleMapComponent
    },
    {
        path: '**',
        component: Page404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
