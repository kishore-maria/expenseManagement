import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';
import { ExpenseActionTypes, AddExpense, AddExpenseSuccess } from '../actions/expense.action';
import { ExpenseService } from '../../services/expense.service';

@Injectable()
export class ExpenseEffects {

  constructor(public router: Router, public actions: Actions, public store: Store<AppState>, public expenseService: ExpenseService) {
  }

  @Effect()
  AddExpense: Observable<any> = this.actions.pipe(
    ofType(ExpenseActionTypes.ADD_EXPENSE),
    map((action: AddExpense) => action.payload),
    switchMap((payload) => {
      return this.expenseService.addExpense(payload).pipe(
        map((result) => {
          console.log(result)
          return new AddExpenseSuccess(null)
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

  // @Effect()
  // UpdateBudget: Observable<any> = this.actions.pipe(
  //   ofType(ExpenseActionTypes.UPDATE_BUDGET),
  //   map((action: UpdateBudget) => action.payload),
  //   switchMap((payload) => {
  //     return this.expenseService.addExpense(payload).pipe(
  //       map((result) => {
  //         console.log(result)
  //         return new UpdateBudgetSuccess(null)
  //       }),
  //       catchError(error => {
  //         let messages = []
  //         messages.push(error.error)
  //         // this.messageService.showError(messages)
  //         return empty();
  //       })
  //     )
  //   })
  // )

}