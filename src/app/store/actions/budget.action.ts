import { Action } from '@ngrx/store';
import { Budget } from '../../models/budget.model';

export enum BudgetActionTypes {
  UPDATE_BUDGET = '[Budget] Update budget.',
  SET_BUDGET = '[Budget] Set budget.',
  UPDATE_BUDGET_SUCCESS = '[Budget] Update budget successfully.',
  GET_BUDGET = '[Budget] Get budget.',
  GET_BUDGET_SUCCESS = '[Budget] Get budget success.',
}

export class GetBudget implements Action {
  readonly type = BudgetActionTypes.GET_BUDGET;
  constructor() {
  }
}

export class GetBudgetSuccess implements Action {
  readonly type = BudgetActionTypes.GET_BUDGET_SUCCESS;
  constructor(public payload: Budget) {
  }
}

export class UpdateBudget implements Action {
  readonly type = BudgetActionTypes.UPDATE_BUDGET;
  constructor(public payload: Budget) {
  }
}

export class UpdateBudgetSuccess implements Action {
  readonly type = BudgetActionTypes.UPDATE_BUDGET_SUCCESS;
  constructor(public payload: Budget) {
  }
}

export type All = UpdateBudget | UpdateBudgetSuccess | GetBudget | GetBudgetSuccess;