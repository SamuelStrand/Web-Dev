import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import render

from api.models import *



def get_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe = False)

def get_company_by_id(request, id):
    company = Company.objects.get(id=id)
    company_json  = company.to_json()
    return JsonResponse(company_json, safe = False)

def get_vacancy_by_company(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
    
    
def get_vacancies_by_id(request, id):
    vacancies = Vacancy.objects.get(id=id)
    vacancies_json = vacancies.to_json()
    return JsonResponse(vacancies_json, safe=False)



def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


@csrf_exempt
def post_vacancies(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        company_id = data['company']
        name = data['name']
        salary = data['salary']
        description = data['description']
        company = Company.objects.get(id=company_id)
        vacancies_json = Vacancy.objects.create(
            company=company,
            name=name,
            salary=salary,
            description=description
        )
        return JsonResponse(vacancies_json.to_json(), safe=False, status = 201)
