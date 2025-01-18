import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [importProvidersFrom(HttpClientModule)]
})
export class AppComponent {
  title = 'angular-frontend';
}
