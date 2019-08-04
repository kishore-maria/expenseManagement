import * as expense from './reducers/expense.reducer';
import * as budget from './reducers/budget.reducer';
import * as category from './reducers/category.reducer';
import * as sideBar from './reducers/sideBar.reducer';
import { Budget } from '../models/budget.model';
import { Category } from '../models/category.model';
import { Expense } from '../models/expense.model';
import { BudgetOverview } from '../models/budget-overview.model';

export interface AppState {
  expenseState: expense.State;
  budgetState: budget.State;
  categoryState: category.State;
  sideBarState: sideBar.State;
}

export const reducers = {
  expenseState: expense.reducer,
  budgetState: budget.reducer,
  categoryState: category.reducer,
  sideBarState: sideBar.reducer
};

// budgetState

const _getBudget = (state: budget.State): Budget => state.budget;

const _getBudgetOverview = (state: budget.State): BudgetOverview => state.budgetDetail;


export const getBudget = (state: AppState): Budget => _getBudget(state.budgetState);

export const getBudgetOverview = (state: AppState): BudgetOverview => _getBudgetOverview(state.budgetState);


// categoryState

const _getCategories = (state: category.State): Category[] => state.categories;

const _getCategory = (state: category.State): Category => state.category;


export const getCategories = (state: AppState): Category[] => _getCategories(state.categoryState);

export const getCategory = (state: AppState): Category => _getCategory(state.categoryState);


// expenseState

const _getExpense = (state: expense.State): Expense => state.expense;

const _getExpenses = (state: expense.State): Expense[] => state.expenses;


export const getExpense = (state: AppState): Expense => _getExpense(state.expenseState);

export const getExpenses = (state: AppState): Expense[] => _getExpenses(state.expenseState);


// sideBarState

const _getPageUrl = (state: sideBar.State): String => state.currentPage;


export const getPageUrl = (state: AppState): String => _getPageUrl(state.sideBarState);