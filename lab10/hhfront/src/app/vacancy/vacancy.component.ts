import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vacancy } from '../vacancy';
import { DataService } from '../company.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  companyVacancies!: Vacancy[];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyId = params['companyId'];


      this.loadCompanyVacancies(companyId);
    });
  }

  loadCompanyVacancies(companyId: number): void {
    this.dataService.getCompanyVacancies(companyId).subscribe(vacancies => {
      this.companyVacancies = vacancies;
    });
  }
}
