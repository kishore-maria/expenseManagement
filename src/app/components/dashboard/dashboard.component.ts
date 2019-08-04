import { Component, OnInit } from '@angular/core';
import { OpenAddExpenseDialog, SelectExpenseSuccess } from '../../store/actions/expense.action';
import { Store } from '@ngrx/store';
import { AppState, getBudgetOverview } from '../../store/app.states';
import { GetBudgetOverview } from 'src/app/store/actions/budget.action';
import { BudgetOverview } from 'src/app/models/budget-overview.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  radius = 54;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;
  budget: BudgetOverview;

  subscriptions: Subscription[] = []

  constructor(public store: Store<AppState>) { 
    this.progress(0);
  }

  ngOnInit() {
    this.store.dispatch(new GetBudgetOverview)
    let budgetState: Observable<BudgetOverview> = this.store.select(getBudgetOverview)
    let budgetOverviewDetail = budgetState.subscribe(details => {
      if (details) {
        this.progress(details.totalPercentage)
        this.budget = details
      } else
        this.budget = null
    })
    this.subscriptions.push(budgetOverviewDetail)
  }

  openExpenseForm() {
    this.store.dispatch(new SelectExpenseSuccess(null))
    this.store.dispatch(new OpenAddExpenseDialog())
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }

}
