import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Welcome to HH Frontend</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
