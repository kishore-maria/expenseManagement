import * as expense from './reducers/expense.reducer';
import * as budget from './reducers/budget.reducer';
import * as category from './reducers/category.reducer';
import { Budget } from '../models/budget.model';
import { Category } from '../models/category.model';

export interface AppState {
  expenseState: expense.State;
  budgetState: budget.State;
  categoryState: category.State;
}

export const reducers = {
  expenseState: expense.reducer,
  budgetState: budget.reducer,
  categoryState: category.reducer
};

// budgetState

const _getBudget = (state: budget.State): Budget => state.budget;


export const getBudget = (state: AppState): Budget => _getBudget(state.budgetState);


// categoryState

const _getCategories = (state: category.State): Category[] => state.categories;

const _getCategory = (state: category.State): Category => state.category;


export const getCategories = (state: AppState): Category[] => _getCategories(state.categoryState);

export const getCategory = (state: AppState): Category => _getCategory(state.categoryState);