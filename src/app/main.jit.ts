import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((success: any): void => console.log(`Bootstrap success`))
    .catch((err: any): void => console.error(err));
