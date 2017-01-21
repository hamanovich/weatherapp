import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app.module.ngfactory';

if (PRODUCTION) {
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);