import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Company } from '../company';

@Component({
  selector: 'app-company',
  templateUrl: './companies.component.html',
  standalone: true,
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCompanies().subscribe(
      (data) => {
        console.log('Companies data:', data);
        this.companies = data;
      },
      (error) => {
        console.error('Ошибка при загрузке компаний:', error);
      }
    );
  }
}
