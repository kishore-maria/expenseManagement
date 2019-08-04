import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AppState } from '../app.states';
import { ExpenseActionTypes, AddExpense, AddExpenseSuccess, OpenAddExpenseDialog, GetExpenses, GetExpensesSuccess, SelectExpense, SelectExpenseSuccess, UpdateExpense, UpdateExpenseSuccess } from '../actions/expense.action';
import { ExpenseService } from '../../services/expense.service';
import { AddExpenseFormComponent } from '../../components/dashboard/components/add-expense-form/add-expense-form.component';
import { Expense } from 'src/app/models/expense.model';
import { MessageService } from 'src/app/services/message.service';

@Injectable()
export class ExpenseEffects {

  expenseAddFormRef: MatDialogRef<AddExpenseFormComponent>

  constructor(public actions: Actions, public store: Store<AppState>, public expenseService: ExpenseService, public dialog: MatDialog, public messageService: MessageService) {
  }

  @Effect()
  AddExpense: Observable<any> = this.actions.pipe(
    ofType(ExpenseActionTypes.ADD_EXPENSE),
    map((action: AddExpense) => action.payload),
    switchMap((payload) => {
      return this.expenseService.addExpense(payload).pipe(
        map((result: Expense) => {
          let msg = "Expense added successfully."
          this.messageService.showSuccess(msg)
          return new AddExpenseSuccess(result)
        }),
        catchError(error => {
          let messages = []
          messages.push(error.error)
          // this.messageService.showError(messages)
          return empty();
        })
      )
    })
  )

  @Effect()
  GetExpenses: Observable<any> = this.actions.pipe(
    ofType(ExpenseActionTypes.GET_EXPENSES),
    map((action: GetExpenses) => action),
    switchMap(() => {
      return this.expenseService.getExpenses().pipe(
        map((result: Expense[]) => {
          return new GetExpensesSuccess(result)
        }),
        catchError(error => {
          let messages = []
          messages.push(error.error)
          // this.messageService.showError(messages)
          return empty();
        })
      )
    })
  )

  @Effect()
  SelectExpense: Observable<any> = this.actions.pipe(
    ofType(ExpenseActionTypes.SELECT_EXPENSE),
    map((action: SelectExpense) => action.payload),
    switchMap((payload) => {
      return this.expenseService.getExpense(payload).pipe(
        map((result: Expense) => {
          return new SelectExpenseSuccess(result)
        }),
        catchError(error => {
          let messages = []
          messages.push(error.error)
          this.messageService.showError(messages)
          return empty();
        })
      )
    })
  )

  @Effect()
  OpenAddExpenseDialog: Observable<any> = this.actions.pipe(
    ofType(ExpenseActionTypes.OPEN_ADD_EXPENSE_DIALOG),
    map((action: OpenAddExpenseDialog) => action),
    switchMap(() => {
      if (this.expenseAddFormRef)
        this.expenseAddFormRef.close()
      this.expenseAddFormRef = this.dialog.open(AddExpenseFormComponent)
      return empty();
    })
  )

  @Effect()
  UpdateExpense: Observable<any> = this.actions.pipe(
    ofType(ExpenseActionTypes.UPDATE_EXPENSE),
    map((action: UpdateExpense) => action.payload),
    switchMap((payload) => {
      return this.expenseService.updateExpense(payload).pipe(
        map((result: Expense) => {
          return new UpdateExpenseSuccess(result)
        }),
        catchError(error => {
          let messages = []
          messages.push(error.error)
          // this.messageService.showError(messages)
          return empty();
        })
      )
    })
  )

}