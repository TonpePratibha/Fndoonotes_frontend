import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
 



platformBrowserDynamic().bootstrapModule(AppModule, {
  
  ngZoneEventCoalescing: true,

})
  .catch(err => console.error(err));
  
// import { bootstrapApplication } from '@angular/platform-browser';

// import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppModule, {
//   providers: [
//     provideHttpClient() // ✅ Use this instead of HttpClientModule
//   ]
// }).catch(err => console.error(err));

