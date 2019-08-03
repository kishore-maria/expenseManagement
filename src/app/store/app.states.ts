import * as expense from './reducers/expense.reducer';
import * as budget from './reducers/budget.reducer';
import { Budget } from '../models/budget.model';

export interface AppState {
  expenseState: expense.State;
  budgetState: budget.State;
}

export const reducers = {
  expenseState: expense.reducer,
  budgetState: budget.reducer
};


const _getBudget = (state: budget.State): Budget => state.budget;



export const getBudget = (state: AppState): Budget => _getBudget(state.budgetState);