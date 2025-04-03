import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Company } from '../company';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../company.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  companies!: Company[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.dataService.getCompanies().subscribe((companiess) => {
      this.companies = companiess;
    });
  }
}