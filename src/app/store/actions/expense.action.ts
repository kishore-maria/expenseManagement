import { Action } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Expense } from '../../models/expense.model';

export enum ExpenseActionTypes {
  ADD_EXPENSE = '[Expense] Add expense.',
  ADD_EXPENSE_SUCCESS = '[Expense] Add expense successfully.',
  UPDATE_EXPENSE = '[Expense] Update expense.',
  UPDATE_EXPENSE_SUCCESS = '[Expense] Update expense successfully.',
  UNDO_DELETE_EXPENSE = '[Expense] Undo delete expense.',
  DELETE_EXPENSE = '[Expense] Delete expense.',
  DELETE_EXPENSE_SUCCESS = '[Expense] Delete expense successfully.',
  SELECT_EXPENSE = '[Expense] Select expense.',
  SELECT_EXPENSE_SUCCESS = '[Expense] Select expense success.',
  OPEN_ADD_EXPENSE_DIALOG = '[Expense] Open add expense form.',
  CLOSE_ADD_EXPENSE_DIALOG = '[Expense] Close add expense form.',
  GET_EXPENSES = '[Expense] Get expenses.',
  GET_EXPENSES_SUCCESS = '[Expense] Get expenses success.',
}

export class AddExpense implements Action {
  readonly type = ExpenseActionTypes.ADD_EXPENSE;
  constructor(public payload: Expense) {
  }
}

export class AddExpenseSuccess implements Action {
  readonly type = ExpenseActionTypes.ADD_EXPENSE_SUCCESS;
  constructor(public payload: Expense) {
  }
}

export class UndoDeleteExpense implements Action {
  readonly type = ExpenseActionTypes.UNDO_DELETE_EXPENSE;
  constructor(public payload: Expense) {
  }
}

export class UpdateExpense implements Action {
  readonly type = ExpenseActionTypes.UPDATE_EXPENSE;
  constructor(public payload: Expense) {
  }
}

export class UpdateExpenseSuccess implements Action {
  readonly type = ExpenseActionTypes.UPDATE_EXPENSE_SUCCESS;
  constructor(public payload: Expense) {
  }
}

export class DeleteExpense implements Action {
  readonly type = ExpenseActionTypes.DELETE_EXPENSE;
  constructor(public payload: Expense) {
  }
}

export class DeleteExpenseSuccess implements Action {
  readonly type = ExpenseActionTypes.DELETE_EXPENSE_SUCCESS;
  constructor(public payload: Expense) {
  }
}

export class GetExpenses implements Action {
  readonly type = ExpenseActionTypes.GET_EXPENSES;
  constructor() {
  }
}

export class GetExpensesSuccess implements Action {
  readonly type = ExpenseActionTypes.GET_EXPENSES_SUCCESS;
  constructor(public payload: Expense[]) {
  }
}

export class SelectExpense implements Action {
  readonly type = ExpenseActionTypes.SELECT_EXPENSE;
  constructor(public payload: String) {
  }
}

export class SelectExpenseSuccess implements Action {
  readonly type = ExpenseActionTypes.SELECT_EXPENSE_SUCCESS;
  constructor(public payload: Expense) {
  }
}

export class OpenAddExpenseDialog implements Action {
  readonly type = ExpenseActionTypes.OPEN_ADD_EXPENSE_DIALOG;
  constructor() {
  }
}

export class CloseAddExpenseDialog implements Action {
  readonly type = ExpenseActionTypes.CLOSE_ADD_EXPENSE_DIALOG;
  constructor() {
  }
}

export type All = AddExpense | AddExpenseSuccess | OpenAddExpenseDialog | CloseAddExpenseDialog | SelectExpense | GetExpenses | GetExpensesSuccess | SelectExpenseSuccess | UpdateExpense | UpdateExpenseSuccess | DeleteExpense | DeleteExpenseSuccess | UndoDeleteExpense;