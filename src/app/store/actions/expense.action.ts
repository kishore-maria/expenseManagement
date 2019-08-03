import { Action } from '@ngrx/store';

export enum ExpenseActionTypes {
  ADD_EXPENSE = '[Expense] Add expense.',
  ADD_EXPENSE_SUCCESS = '[Expense] Add expense successfully.',
}

export class AddExpense implements Action {
  readonly type = ExpenseActionTypes.ADD_EXPENSE;
  constructor(public payload: any) {
  }
}

export class AddExpenseSuccess implements Action {
  readonly type = ExpenseActionTypes.ADD_EXPENSE_SUCCESS;
  constructor(public payload: any) {
  }
}

export type All = AddExpense | AddExpenseSuccess;