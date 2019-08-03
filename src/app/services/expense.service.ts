import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  BASE_URL = '/api/expense'

  constructor(public http: HttpClient) { }

  addExpense(data) {
    return this.http.post(`${this.BASE_URL}`, data)
  }

}
