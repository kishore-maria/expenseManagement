import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  BASE_URL = '/api/budget'

  constructor(public http: HttpClient) { }

  updateBudget(data: Budget) {
    return this.http.post(`${this.BASE_URL}`, data)
  }

  getBudget() {
    return this.http.get(`${this.BASE_URL}`)
  }

  getBudgetOverview() {
    return this.http.get(`/api/budgetOverview`)
  }

}
