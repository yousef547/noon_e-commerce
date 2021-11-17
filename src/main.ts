import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var $:any;
// $(function() {  
//   $("html, #scroll").niceScroll({
//     cursorcolor: "#feee00",
//     cursorwidth: "10px",
//     zindex:  [99999999],
//   });
// });
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
