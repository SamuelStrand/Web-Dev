import { Company } from "./company";
import { CompanyComponent } from "./company/company.component";

export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: Company
  }