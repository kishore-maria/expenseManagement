import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = '/api/category'

  constructor(public http: HttpClient) { }

  addCategory(category: Category) {
    return this.http.post(`${this.BASE_URL}`, category)
  }

  getCategories() {
    return this.http.get(`${this.BASE_URL}`)
  }

  deleteCategories(category) {
    return this.http.delete(`${this.BASE_URL}/${category._id}`)
  }
  
}
