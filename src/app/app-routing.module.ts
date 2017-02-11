import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Page404Component } from "./overall/page404/page404.component";
import { WidgetComponent } from './widget/widget.component';

import { CustomPreloadingStrategy } from "./custom-preloading.strategy";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'meteo',
        pathMatch: 'full'
    },
    {
        path: 'map',
        loadChildren: './google-map/google-map.module#GoogleMapModule',
        data: {
            preload: true
        }
    },
    {
        path: 'show',
        component: WidgetComponent,
        outlet: 'widget',
        data: {
            preload: true
        }
    },
    {
        path: '**',
        component: Page404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, {
                preloadingStrategy: CustomPreloadingStrategy
            }
        )
    ],
    providers: [CustomPreloadingStrategy],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
