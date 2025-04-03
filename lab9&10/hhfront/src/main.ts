import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouterModule,
      useValue: RouterModule.forRoot(routes),
    },
  ],
}).catch((err) => console.error(err));
