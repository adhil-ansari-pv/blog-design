import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  window.addEventListener("scroll",function(){
    var nav = this.document.querySelector("nav");
    nav?.classList.toggle("bg-slate-800" , this.window.scrollY > 0)

  })
