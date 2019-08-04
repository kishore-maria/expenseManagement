import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getBudget, getCategories } from '../../store/app.states';
import { UpdateBudget, GetBudget } from '../../store/actions/budget.action';
import { Budget } from '../../models/budget.model';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../models/category.model';
import { AddCategory, GetCategories } from '../../store/actions/category.action';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit, OnDestroy {

  budget: Budget;

  category: Category;

  categories: Category[]

  subscriptions: Subscription[] = [];

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetBudget())
    this.store.dispatch(new GetCategories())
    let budgetState: Observable<Budget> = this.store.select(getBudget)
    let budgetDetail = budgetState.subscribe(budget => {
      if (budget)
        this.budget = budget
      else
        this.budget = {
          budget: null
        }
    })
    this.subscriptions.push(budgetDetail)
    let categoryState: Observable<Category[]> = this.store.select(getCategories)
    let categoryStateDetail = categoryState.subscribe(categories => {
      this.category = {
        name: null
      }
      if (categories)
        this.categories = categories
      else
        this.categories = []
    })
    this.subscriptions.push(categoryStateDetail)
    this.category = {
      name: null
    }
  }

  setBudget() {
    this.store.dispatch(new UpdateBudget(this.budget))
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

  addCategory() {
    this.store.dispatch(new AddCategory(this.category))
  }

}
