import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { getExpenses, AppState } from 'src/app/store/app.states';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetExpenses, SelectExpenseSuccess, OpenAddExpenseDialog, DeleteExpense, UndoDeleteExpense } from 'src/app/store/actions/expense.action';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import * as moment from 'moment'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  expenses: Expense[]

  displayedColumns = ['action', 'category', 'name', 'amount', 'date'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  public dataSource = new MatTableDataSource<Expense>()

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetExpenses())
    let expenseState: Observable<Expense[]> = this.store.select(getExpenses)
    let expenseDetail = expenseState.subscribe(expenses => {
      if (expenses) {
        expenses.map(expense => {
          expense.date = moment(expense.date).format('DD MMM, YYYY')
        })
        this.dataSource.data = expenses;
      } else
        this.expenses = expenses
    })
    this.subscriptions.push(expenseDetail)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editExpense(expense) {
    expense.date = new Date(expense.date)
    this.store.dispatch(new SelectExpenseSuccess(expense))
    this.store.dispatch(new OpenAddExpenseDialog())
  }

  deleteExpense(expense) {
    this.store.dispatch(new DeleteExpense(expense))
  }

  undoDelete(expense) {
    this.store.dispatch(new UndoDeleteExpense(expense))
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
