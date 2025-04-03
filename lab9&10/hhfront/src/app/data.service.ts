import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}companies/${id}/`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies/`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${companyId}/vacancies/`);
  }

  getTopVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies/top_ten/`);
  }
}
