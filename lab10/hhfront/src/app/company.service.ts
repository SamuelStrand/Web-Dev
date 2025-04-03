import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

   getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies/');
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`http://127.0.0.1:8000/api/companies/${id}/`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>('http://127.0.0.1:8000/api/vacancies/');
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${companyId}/vacancies/`);
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>('http://127.0.0.1:8000/api/vacancies/top_ten/');
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`http://127.0.0.1:8000/api/vacancies/${id}/`);
  }

  
}
