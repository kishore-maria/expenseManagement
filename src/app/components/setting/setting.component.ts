import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getBudget } from '../../store/app.states';
import { UpdateBudget, GetBudget } from '../../store/actions/budget.action';
import { Budget } from '../../models/budget.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit, OnDestroy {

  budget: Budget;

  subscriptions: Subscription[] = []

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetBudget())
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
  }

  setBudget() {
    this.store.dispatch(new UpdateBudget(this.budget))
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
