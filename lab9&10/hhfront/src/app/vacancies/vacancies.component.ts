import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Vacancy } from '../vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('companyId'));
    this.dataService.getCompanyVacancies(companyId).subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }
}
