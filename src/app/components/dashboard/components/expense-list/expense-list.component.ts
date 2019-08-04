import { Component, OnInit, OnDestroy } from '@angular/core';
import { getExpenses, AppState } from 'src/app/store/app.states';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetExpenses, SelectExpenseSuccess, OpenAddExpenseDialog } from 'src/app/store/actions/expense.action';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  expenses: Expense[]

  displayedColumns = ['action', 'category', 'name', 'amount', 'date'];

  public dataSource = new MatTableDataSource<Expense>()

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetExpenses())
    let expenseState: Observable<Expense[]> = this.store.select(getExpenses)
    let expenseDetail = expenseState.subscribe(expenses => {
      if (expenses)
        this.dataSource.data = expenses;
      else
        this.expenses = expenses
    })
    this.subscriptions.push(expenseDetail)
  }

  editExpense(expense) {
    this.store.dispatch(new SelectExpenseSuccess(expense))
    this.store.dispatch(new OpenAddExpenseDialog())
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
