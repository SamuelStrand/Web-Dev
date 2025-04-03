import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
// import { TopVacancyListComponent } from './top-vacancy-list/top-vacancy-list.component'; // Import this if necessary

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' }, // Redirect to 'companies' by default
  { path: 'companies', component: CompaniesComponent, title: 'Companies' },
  { path: 'companies/:companyId/vacancies', component: VacanciesComponent, title: 'Vacancies' },
  // { path: 'companies/:companyId/top-vacancies', component: TopVacancyListComponent, title: 'Top Vacancies' }, // Optional, if needed
];

